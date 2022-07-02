const Router = require('express')
const menuController = require('../controllers/menuController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', menuController.getAll)
router.post('/', authMiddleware, menuController.create)
router.put('/', authMiddleware, menuController.change)
router.delete('/:id', authMiddleware, menuController.destroy)

module.exports = router