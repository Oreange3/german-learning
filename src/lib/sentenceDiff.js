/** Word-by-word check for a typed translation. Punctuation, case, and ß/umlaut spelling are ignored. */

export function tokenize(text) {
  return String(text || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
}

export function foldToken(token) {
  return String(token)
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/[^\p{L}\p{N}]+/gu, '')
}

function lcsMatrix(left, right) {
  const rows = left.length
  const cols = right.length
  const table = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0))
  for (let i = rows - 1; i >= 0; i -= 1) {
    for (let j = cols - 1; j >= 0; j -= 1) {
      if (left[i] && left[i] === right[j]) table[i][j] = table[i + 1][j + 1] + 1
      else table[i][j] = Math.max(table[i + 1][j], table[i][j + 1])
    }
  }
  return table
}

export function diffWords(guessText, answerText) {
  const guessTokens = tokenize(guessText)
  const answerTokens = tokenize(answerText)
  const guessFold = guessTokens.map(foldToken)
  const answerFold = answerTokens.map(foldToken)
  const table = lcsMatrix(guessFold, answerFold)
  const guess = []
  const answer = []
  let i = 0
  let j = 0

  while (i < guessTokens.length && j < answerTokens.length) {
    if (guessFold[i] && guessFold[i] === answerFold[j]) {
      guess.push({ text: guessTokens[i], status: 'right' })
      answer.push({ text: answerTokens[j], status: 'right' })
      i += 1
      j += 1
    } else if (table[i + 1][j] >= table[i][j + 1]) {
      guess.push({ text: guessTokens[i], status: 'wrong' })
      i += 1
    } else {
      answer.push({ text: answerTokens[j], status: 'wrong' })
      j += 1
    }
  }

  while (i < guessTokens.length) {
    guess.push({ text: guessTokens[i], status: 'wrong' })
    i += 1
  }
  while (j < answerTokens.length) {
    answer.push({ text: answerTokens[j], status: 'wrong' })
    j += 1
  }

  const matched = guess.filter((token) => token.status === 'right').length
  const correct = guess.length > 0 && matched === guess.length && matched === answer.length
  return { guess, answer, matched, correct }
}

export function gradeSentence(guessText, accepted) {
  const options = (Array.isArray(accepted) ? accepted : [accepted]).filter(Boolean)
  let best = null
  for (const answerText of options) {
    const graded = diffWords(guessText, answerText)
    const wrong =
      graded.guess.filter((token) => token.status === 'wrong').length +
      graded.answer.filter((token) => token.status === 'wrong').length
    const rank = graded.matched * 1000 - wrong
    if (!best || rank > best.rank) best = { rank, graded }
  }
  return best ? best.graded : diffWords(guessText, '')
}
