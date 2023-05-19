import URLModel from '../models/url.js'
import dns from 'dns'
import { nanoid } from 'nanoid'
import getHostname from '../utils/getHostname.js'
import randomFrom from '../utils/randomFrom.js'

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
    const new_url = await URLModel.create({
      original_url,
      short_url: nanoid(randomFrom(5, 7)),
      number_of_visits: 0,
    })

    res.status(201).json(new_url)
  } catch (err) {
    console.log(err)
    res.status(404).json({
      status: 404,
    })
  }
}

export default post_shorten_url
