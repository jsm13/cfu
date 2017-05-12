const express = require('express')
const db = require('./js/db/models')
const app = module.exports = express()

// TODO: add authentication middleware
// first: https://github.com/expressjs/express/blob/master/examples/web-service/index.js#L9-L49
// then: passport.js

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world!'
  })
})

app.get('/cfus', (req, res) => {
  db.CfU.findAll({})
    .then((cfus) => {
      res.json(cfus)
    })
})

app.get('/cfus/:id/scores', (req, res) => {
  // TODO: not filtering
  db.CfUScore.findAll({
    CfUId: req.params.id
  }).then((cfus) => {
    res.json(cfus)
  })
})
// TODO: error handling middleware

// TODO: add custom JSON 404 middleware
const port = 3000

app.listen(port, () => {
  console.log('...out of five on port ', port)
})
