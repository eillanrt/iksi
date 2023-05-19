import { Router } from 'express'
import { get_short_url } from '../controllers/get-short-url.js'

const router = Router()

router.get('/', (req, res) => {
  res.sendFile('../public/index.html')
})

router.get('/:short_url', get_short_url)

export default router
