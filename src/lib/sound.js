/** Quiet Web Audio blips. No audio files. Call from a click so the browser can resume. */

let ctx

function context() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext
  if (!AudioCtx) return null
  if (!ctx) ctx = new AudioCtx()
  return ctx
}

export function primeAudio() {
  const audio = context()
  if (audio && audio.state === 'suspended') audio.resume()
}

export function playResult(correct) {
  const audio = context()
  if (!audio) return

  const blip = () => {
    const osc = audio.createOscillator()
    const gain = audio.createGain()
    osc.type = correct ? 'triangle' : 'sine'
    osc.frequency.value = correct ? 880 : 196
    const duration = correct ? 0.07 : 0.045
    const peak = correct ? 0.05 : 0.02
    const now = audio.currentTime
    gain.gain.setValueAtTime(peak, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration)
    osc.connect(gain)
    gain.connect(audio.destination)
    osc.start(now)
    osc.stop(now + duration + 0.02)
  }

  if (audio.state === 'suspended') {
    audio.resume().then(blip)
  } else {
    blip()
  }
}
