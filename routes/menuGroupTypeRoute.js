const Router = require('express')
const menuGroupTypeController = require('../controllers/menuGroupTypeController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', menuGroupTypeController.getAll)
router.post('/', authMiddleware, menuGroupTypeController.create)
router.put('/:id/', authMiddleware, menuGroupTypeController.change)
router.delete('/:id/', authMiddleware, menuGroupTypeController.destroy)

module.exports = router