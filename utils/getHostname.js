import { URL } from 'url'

function getHostname(url) {
  console.log(url)
  try {
    return new URL(url).hostname
  } catch (err) {
    throw new Error('Not a valid URL', { cause: err })
  }
}

export default getHostname
