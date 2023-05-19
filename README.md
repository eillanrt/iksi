# iksi

A simple url-shrinker web server

## Thanks for [Bard](https://bard.google.com) for writing some CSS for me!

## `GET  /:short_url`

Will redirect to the corresponding original URL if it is a valid `short url`. Otherwise it will respond with `404`

```js
async function getShortURL(longURL) {
  const res = await fetch('/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({original_url: longURL)
  })

  const data = await res.json()

  return data.short_url
}

getShortURL('https://www.youtube.com/watch?v=EFwa5Owp0-k') // short id string
```

Then append that short id string in to the origin

`http://127.0.0.1:3000/<short-id-string>`
