const router = require('express').Router()

const validate = require('../middlewares/validateBody')

const authCtrl = require('../auth/auth.ctrl')
const itemCtrl = require('../item/item.ctrl')

router.post('/login',
  validate(authCtrl.USER_LOGIN_SCHEMA),
  authCtrl.login)

router.get('/items', itemCtrl.getItems)

module.exports = router