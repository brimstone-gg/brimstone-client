export const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const CDN = path => {
  const isProd = process.env.NODE_ENV === 'production'
  return isProd ? `https://cdn.brimstone.gg${path}` : path
}
