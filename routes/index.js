import { Router } from 'express'
import { get_index_page, get_short_url } from '../controllers/get-short-url.js'

const router = Router()

router.get('/', get_index_page)
router.get('/:short_url', get_short_url)

export default router
