import { URL } from 'url'

class Utils {
  static getHostname(url) {
    try {
      return new URL(url).hostname
    } catch (err) {
      throw new Error('Not a valid URL', { cause: err })
    }
  }

  // start and end both incusive
  static randomFrom(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start
  }
}

export const { getHostname, randomFrom } = Utils

export default Utils
