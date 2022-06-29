const Router = require('express')
const orderController = require('../controllers/orderController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

// router.post('/', authMiddleware, menuController.create)
// router.put('/:id', authMiddleware, menuController.changeOptions)
// router.delete('/:id', authMiddleware, menuController.destroy)
router.get('/', orderController.getAll)
router.get('/count', orderController.getCount)
router.post('/', orderController.create)
router.put('/:id', orderController.changeOption)
router.delete('/:id', orderController.destroy)

module.exports = router