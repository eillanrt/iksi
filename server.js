import express from 'express'
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('HEY')
})

app.listen(PORT, () => {
  console.log('now listening on port ' + PORT)
})
