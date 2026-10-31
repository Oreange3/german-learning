import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { practiceExams, collectAnswers } from '../src/data/practiceExams.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'public', 'exams')

const PAGE_W = 595
const PAGE_H = 842
const MARGIN = 50
const LINE = 13
const TITLE_SIZE = 16
const HEAD_SIZE = 13
const BODY_SIZE = 10

const WINANSI = {
  Ä: '\\304',
  Ö: '\\326',
  Ü: '\\334',
  ä: '\\344',
  ö: '\\366',
  ü: '\\374',
  ß: '\\337',
  é: '\\351',
  è: '\\350',
  á: '\\341',
  '€': '\\200',
}

function pdfEscape(text) {
  let out = ''
  for (const ch of String(text)) {
    if (ch === '\\') out += '\\\\'
    else if (ch === '(') out += '\\('
    else if (ch === ')') out += '\\)'
    else if (ch === '\r') continue
    else if (WINANSI[ch]) out += WINANSI[ch]
    else if (ch.charCodeAt(0) > 127) out += '?'
    else out += ch
  }
  return out
}

function wrap(text, widthChars) {
  const words = String(text).replace(/\r/g, '').split(/\s+/)
  const lines = []
  let line = ''
  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (next.length > widthChars && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }
  if (line) lines.push(line)
  return lines.length ? lines : ['']
}

function wrapPreservingBreaks(text, widthChars) {
  return String(text)
    .split('\n')
    .flatMap((row) => wrap(row, widthChars))
}

class PdfDoc {
  constructor() {
    this.pages = []
    this._startPage()
  }

  _startPage() {
    this.y = PAGE_H - MARGIN
    this.ops = []
  }

  _flushPage() {
    this.pages.push(this.ops.join('\n'))
    this._startPage()
  }

  _need(height) {
    if (this.y - height < MARGIN) this._flushPage()
  }

  text(str, { size = BODY_SIZE, bold = false, gap = LINE } = {}) {
    const widthChars = size >= 14 ? 62 : 86
    const lines = wrapPreservingBreaks(str, widthChars)
    for (const line of lines) {
      this._need(gap)
      const font = bold ? 'F2' : 'F1'
      this.ops.push(
        `BT /${font} ${size} Tf ${MARGIN} ${this.y} Td (${pdfEscape(line)}) Tj ET`,
      )
      this.y -= gap
    }
  }

  space(n = 8) {
    this.y -= n
    if (this.y < MARGIN) this._flushPage()
  }

  rule() {
    this._need(10)
    this.ops.push(`${MARGIN} ${this.y} m ${PAGE_W - MARGIN} ${this.y} l S`)
    this.y -= 12
  }

  finish() {
    if (this.ops.length) this._flushPage()
    return this.pages
  }
}

function writeExamPdf(exam) {
  const doc = new PdfDoc()
  doc.text('Hallo Deutsch!  ·  Practice exam (original)', { size: 9, gap: 12 })
  doc.text(exam.title, { size: TITLE_SIZE, bold: true, gap: 18 })
  doc.text(`${exam.level}  ·  ${exam.style}`, { size: BODY_SIZE, gap: 12 })
  doc.text(`Time: ${exam.duration}`, { size: BODY_SIZE, gap: 12 })
  doc.text(exam.intro, { size: BODY_SIZE, gap: 12 })
  doc.text('This is not an official Goethe-Institut, telc, or ÖSD paper.', { size: 9, gap: 14 })
  doc.rule()

  for (const section of exam.sections) {
    doc.space(4)
    doc.text(`${section.skill}${section.time ? `  (${section.time})` : ''}`, {
      size: HEAD_SIZE,
      bold: true,
      gap: 16,
    })
    if (section.instructions) doc.text(section.instructions, { size: BODY_SIZE, gap: 12 })

    for (const item of section.items) {
      if (item.kind === 'passage' || item.kind === 'transcript') {
        doc.space(4)
        doc.text(item.title || item.kind, { size: 11, bold: true, gap: 14 })
        doc.text(item.text, { size: BODY_SIZE, gap: 12 })
        continue
      }

      doc.space(3)
      doc.text(`${item.id}  ${item.prompt}`, { size: BODY_SIZE, gap: 12 })
      if (item.text) doc.text(item.text, { size: BODY_SIZE, gap: 12 })
      if (item.options?.length) {
        doc.text(item.options.map((opt, i) => `${String.fromCharCode(97 + i)}) ${opt}`).join('    '), {
          size: BODY_SIZE,
          gap: 12,
        })
      }
      if (item.fields) {
        for (const field of item.fields) {
          doc.text(`${field.label}: ______________________________`, { size: BODY_SIZE, gap: 14 })
        }
      }
      if (item.kind === 'write' || item.kind === 'speak') {
        doc.text(item.kind === 'write' ? '(Write your answer on paper.)' : '(Speak. No written answer in a real exam.)', {
          size: 9,
          gap: 12,
        })
      }
      if (item.kind === 'gap') {
        doc.text('Answer: ____________________', { size: BODY_SIZE, gap: 14 })
      }
    }
  }

  doc.space(10)
  doc.rule()
  doc.text('ANSWERS  —  cover this section until you finish', { size: HEAD_SIZE, bold: true, gap: 16 })
  doc.text('Writing and speaking keys are model answers, not the only correct wording.', {
    size: 9,
    gap: 14,
  })

  for (const row of collectAnswers(exam)) {
    doc.text(`${row.id}  (${row.skill})`, { size: 10, bold: true, gap: 12 })
    doc.text(String(row.answer), { size: BODY_SIZE, gap: 12 })
    if (row.note) doc.text(`Note: ${row.note}`, { size: 9, gap: 12 })
    doc.space(3)
  }

  const pageStreams = doc.finish()
  return buildPdf(pageStreams)
}

function buildPdf(pageStreams) {
  const objects = []
  const add = (body) => {
    objects.push(body)
    return objects.length
  }

  const font1 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>')
  const font2 = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>')

  const contentIds = pageStreams.map((stream) => {
    const bytes = Buffer.from(stream, 'latin1')
    return add(`<< /Length ${bytes.length} >>\nstream\n${stream}\nendstream`)
  })

  const pageIds = contentIds.map((contentId) =>
    add(
      `<< /Type /Page /Parent PAGES /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Contents ${contentId} 0 R /Resources << /Font << /F1 ${font1} 0 R /F2 ${font2} 0 R >> >> >>`,
    ),
  )

  const pagesId = add(
    `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`,
  )

  objects[pageIds[0] - 1] = objects[pageIds[0] - 1] // keep array stable
  for (let i = 0; i < pageIds.length; i += 1) {
    objects[pageIds[i] - 1] = objects[pageIds[i] - 1].replace('/Parent PAGES', `/Parent ${pagesId} 0 R`)
  }

  const catalogId = add(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`)

  let pdf = '%PDF-1.4\n'
  const offsets = [0]
  for (let i = 0; i < objects.length; i += 1) {
    offsets.push(Buffer.byteLength(pdf, 'latin1'))
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`
  }
  const xrefAt = Buffer.byteLength(pdf, 'latin1')
  pdf += `xref\n0 ${objects.length + 1}\n`
  pdf += '0000000000 65535 f \n'
  for (let i = 1; i <= objects.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
  }
  pdf += `trailer << /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefAt}\n%%EOF`
  return Buffer.from(pdf, 'latin1')
}

mkdirSync(outDir, { recursive: true })
for (const exam of practiceExams) {
  const name = exam.pdf.replace('/exams/', '')
  writeFileSync(join(outDir, name), writeExamPdf(exam))
  console.log(`wrote public/exams/${name}`)
}
