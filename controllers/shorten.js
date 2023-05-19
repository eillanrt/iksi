import URLModel from '../models/url'
import dns from 'dns'
import { nanoid } from 'nanoid'
import { getHostname, randomFrom } from '../utils'

async function post_shorten_url(req, res) {
  const { original_url } = req.body

  try {
    const hostname = getHostname(original_url)

    await dns.promises.lookup(hostname, { all: true })

    const url = await URLModel.findOne({ original_url })

    if (url) {
      res.json(url)
      return
    }

    // Create new URL if it does not yet exist
    const new_url = URLModel.create({
      original_url,
      short_url: nanoid(randomFrom(5, 7)),
      number_of_visits: 0,
    })
  } catch (err) {
    console.log(err.message)
    res.status(404).json({
      status: 404,
    })
  }
}
