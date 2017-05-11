const express = require('express')
// TODO: require modles

const app = module.exports = express()

// TODO: add authentication middleware
// first: https://github.com/expressjs/express/blob/master/examples/web-service/index.js#L9-L49
// then: passport.js

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world!'
  })
})

// TODO: error handling middleware

// TODO: add custom JSON 404 middleware
const port = 3000

app.listen(3000, () => {
  console.log('...out of five on port ', port)
})
