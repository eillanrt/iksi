import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import shortenRoute from './routes/shorten'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to the DB successfully')

    app.listen(PORT, () => {
      console.log(`Server now listening on port: ${PORT}...`)
    })
  })

app.use('/shorten', shortenRoute)

app.use((req, res) => {
  res.status(404).render('404', { url: req.url })
})
