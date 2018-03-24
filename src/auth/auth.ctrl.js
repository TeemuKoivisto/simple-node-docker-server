
const Joi = require('joi')

const USER_LOGIN_SCHEMA = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
})

const login = async (req, res, next) => {
  try {
    const user = await Promise.resolve({ name: "matti", email: "maza@asdf.asdf" })
    res.json(user)
  } catch(err) {
    next(err)
  }
}

module.exports = {
  login,
  USER_LOGIN_SCHEMA
}