const Router = require('express')
const menuController = require('../controllers/menuController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

// router.post('/', authMiddleware, menuController.create)
// router.put('/:id', authMiddleware, menuController.changeOptions)
// router.delete('/:id', authMiddleware, menuController.destroy)
router.get('/', menuController.getAll)
router.post('/', menuController.create)
router.put('/', menuController.change)
router.delete('/:id', menuController.destroy)

module.exports = router