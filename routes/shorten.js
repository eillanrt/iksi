import { Router } from 'express'
import post_shorten_url from '../controllers/shorten.js'

const router = Router()

router.post('/', post_shorten_url)

export default router
