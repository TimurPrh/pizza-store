const Router = require('express')
const orderController = require('../controllers/orderController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

// router.post('/', authMiddleware, menuController.create)
// router.put('/:id', authMiddleware, menuController.changeOptions)
// router.delete('/:id', authMiddleware, menuController.destroy)
router.get('/', orderController.getAll)
router.post('/', orderController.create)
router.delete('/:id', orderController.destroy)

module.exports = router