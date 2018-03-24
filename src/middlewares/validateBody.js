
const Joi = require('joi')
const CustomError = require('../config/error')

module.exports = schema => async (req, res, next) => {
  const { body } = req

  const result = Joi.validate(body, schema)

  if (result.error) {
    next(new CustomError(result.error, 401))
  } else {
    await next()
  }
}