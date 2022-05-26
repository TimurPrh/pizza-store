const Router = require('express')
const router = new Router()
const userRouter = require('./userRoute')
const menuRouter = require('./menuRoute')
const menuGroupTypeRouter = require('./menuGroupTypeRoute')
// const todosRouter = require('./todosRouter')

router.use('/user', userRouter)
router.use('/menu', menuRouter)
router.use('/type', menuGroupTypeRouter)

module.exports = router