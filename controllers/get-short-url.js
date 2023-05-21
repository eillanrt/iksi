import URLModel from '../models/url.js'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function get_index_page(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '..', '/views') })
}

async function get_short_url(req, res) {
  const { short_url } = req.params

  const url = await URLModel.findOne({ short_url })

  if (!url) {
    res.status(404).render('404', { url: req.url })
    return
  }

  await URLModel.updateOne(
    { short_url },
    {
      number_of_visits: url.number_of_visits + 1,
    }
  )

  res.redirect(url.original_url)
}

export { get_index_page, get_short_url }
