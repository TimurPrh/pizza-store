const Router = require('express')
const orderController = require('../controllers/orderController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', orderController.getAll)
router.get('/count', orderController.getCount)
router.post('/', orderController.create)
router.put('/:id', authMiddleware, orderController.changeOption)
router.delete('/:id', authMiddleware, orderController.destroy)

module.exports = router