import URLModel from '../models/url.js'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function get_delete_url(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public/delete.html'))
}

async function delete_delete_url(req, res) {
  const { url } = req.body
  await URLModel.findOneAndDelete({ original_url: url })

  res.json({ redirect: '/' })
}

export { get_delete_url, delete_delete_url }
