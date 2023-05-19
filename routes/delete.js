import { Router } from 'express'
import { get_delete_url, delete_delete_url } from '../controllers/delete.js'
const router = Router()

router.get('/', get_delete_url)
router.delete('/', delete_delete_url)

export default router
