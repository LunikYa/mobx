const Router = require('koa-router')
const router = Router()
const { getUsers } = require('./dataController')

router.get('/users', getUsers)

module.exports = router