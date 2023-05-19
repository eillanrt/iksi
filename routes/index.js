import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.sendFile('../public/index.html')
})
router.get('/:short_url')

export default router
