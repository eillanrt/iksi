# iksi

A simple url-shrinker web server

## Thanks for [Bard](https://bard.google.com) for writing some CSS for me!

---

## RUN

- Go to [https://mongodb.com](https://mongodb.com). Set up a database and get URI. Choose nodeJS as the driver
- Creata a `.env` file and add `MONGOD_URI` key with a corresponding value of the URI obtained from mongoDB
  -- install necessary dependecies `npm install`
- run the server
  `npx nodemon server.js `

## `GET  /:short_url`

Will redirect to the corresponding original URL if it is a valid `short url`. Otherwise it will respond with `404`

### The following code demonstrates how to send POST request to the server

```js
async function getShortURL(longURL) {
  const res = await fetch('/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(original_url: longURL)
  })

  const data = await res.json()
  /*
    data
    {
      _id: mongoDB ID
      original_url: <long_url>,
      short_url: a short string that serves as the path to that original url,
      number_of_visits: how many times the short_url has been clicked/opened
    }
  */

  return data.short_url
}

getShortURL('https://www.youtube.com/watch?v=EFwa5Owp0-k') // short id string
```

Then append that short id string in to the origin

`http://127.0.0.1:3000/<short-id-string>`
