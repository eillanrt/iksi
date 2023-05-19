import URLModel from '../models/url.js'

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

export { get_short_url }
