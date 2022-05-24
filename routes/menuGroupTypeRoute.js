const Router = require('express')
const menuGroupTypeController = require('../controllers/menuGroupTypeController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

// router.get('/', authMiddleware, menuController.getAll)
// router.post('/', authMiddleware, menuController.create)
// router.put('/:id', authMiddleware, menuController.changeOptions)
// router.delete('/:id', authMiddleware, menuController.destroy)
router.get('/', menuGroupTypeController.getAll)
router.post('/', menuGroupTypeController.create)
router.put('/:id/', menuGroupTypeController.change)
router.delete('/:id/', menuGroupTypeController.destroy)

module.exports = router