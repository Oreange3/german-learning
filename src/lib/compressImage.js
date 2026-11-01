export const IMAGE_SIZE = 128
const IMAGE_QUALITY = 0.82

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('That picture would not load.'))
    img.src = src
  })
}

function drawSquare(img) {
  const width = img.naturalWidth || img.width
  const height = img.naturalHeight || img.height
  const side = Math.min(width, height)
  if (!side) throw new Error('That picture would not load.')

  const canvas = document.createElement('canvas')
  canvas.width = IMAGE_SIZE
  canvas.height = IMAGE_SIZE
  const ctx = canvas.getContext('2d')
  const sx = Math.floor((width - side) / 2)
  const sy = Math.floor((height - side) / 2)
  ctx.drawImage(img, sx, sy, side, side, 0, 0, IMAGE_SIZE, IMAGE_SIZE)
  return canvas.toDataURL('image/jpeg', IMAGE_QUALITY)
}

export async function compressImageFile(file) {
  if (!file?.type?.startsWith('image/')) {
    throw new Error('Pick a picture file (jpg, png, gif, webp).')
  }
  const url = URL.createObjectURL(file)
  try {
    return drawSquare(await loadImage(url))
  } finally {
    URL.revokeObjectURL(url)
  }
}

export async function compressImageSource(src) {
  if (typeof src !== 'string' || !src.startsWith('data:image/')) return src
  const img = await loadImage(src)
  const width = img.naturalWidth || img.width
  const height = img.naturalHeight || img.height
  if (width === IMAGE_SIZE && height === IMAGE_SIZE && src.startsWith('data:image/jpeg')) return src
  return drawSquare(img)
}
