require("dotenv").config()

const express = require('express')
const morgan = require('morgan')
const winston = require('winston')

const app = express()

const PORT = process.env.PORT || 4444

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan("dev"))
}

app.get('', (req, res) => {
  res.send('Hi there, friendo.')
})

if (!module.parent) {
  app.listen(PORT, err => {
    if (err) throw err
    else winston.info(`Node-server is listening on port: ${PORT}`)
  })
}

module.exports = app