import { URL } from 'url'

function getHostname(url) {
  try {
    return new URL(url).hostname
  } catch (err) {
    throw new Error('Not a valid URL', { cause: err })
  }
}

export default getHostname
