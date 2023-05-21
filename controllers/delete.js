import URLModel from '../models/url.js'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function get_delete_url(req, res) {
  res.sendFile('delete.html', { root: path.join(__dirname, '..', '/public') })
}

async function delete_delete_url(req, res) {
  const { url } = req.body
  const deleted_url = await URLModel.findOneAndDelete({ original_url: url })

  res.json({ redirect: '/', deleted_url })
}

export { get_delete_url, delete_delete_url }
