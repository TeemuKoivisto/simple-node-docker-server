require("dotenv").config()

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const winston = require('winston')

const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

const { NODE_ENV, PORT, LOG_LEVEL } = process.env

winston.exitOnError = false
winston.level = LOG_LEVEL

if (NODE_ENV === 'local') {
  app.use(morgan("dev"))
} else if (LOG_LEVEL === 'info') {
  app.use(morgan(':method :url :status - :response-time ms - :remote-addr'))
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('', routes)
app.use(errorHandler)

app.get('/health', (req, res) => res.status(200).send('healthy'))

if (!module.parent) {
  app.listen(PORT, () => {
    winston.info(`Node-server is listening on port: ${PORT}`)
  })
}

module.exports = app