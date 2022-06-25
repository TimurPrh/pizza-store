const Router = require('express')
const router = new Router()
const userRouter = require('./userRoute')
const menuRouter = require('./menuRoute')
const menuGroupTypeRouter = require('./menuGroupTypeRoute')
const orderRouter = require('./orderRoute')

router.use('/user', userRouter)
router.use('/menu', menuRouter)
router.use('/type', menuGroupTypeRouter)
router.use('/order', orderRouter)

module.exports = router