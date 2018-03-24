
const winston = require('winston')

const CustomError = require('../config/error')

const { NODE_ENV } = process.env

module.exports = async (err, req, res, next) => {
  if (err) {
    const statusCode = err.statusCode ? err.statusCode : 500
    const message = statusCode === 500 ? 'Internal server error' : 'Something went wrong'
    const body = { message }
    if (statusCode === 500) {
      winston.error('Handled internal server error: ', err)
    } else {
      winston.info('Handled error: ', err)      
    }
    if (NODE_ENV === 'local') {
      body.message = err.message
      body.stack = err.stack
    }
    res.status(statusCode).json(body)
  } else {
    next()
  }
}
