const ApiError = require('../error/ApiError');
const { createOrder, removeOrder, getOrders, changeDone } = require('../services/orders');

class OrderController {
  async getAll(req, res, next) {
    try {
      res.json(await getOrders());
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async create(req, res, next) {
    try {
      const formattedOrder = req.body.order.map(item => {
        const newItem = {}
        newItem.id = item.id
        newItem.typeid = item.typeid
        newItem.name = item.name
        newItem.price = item.price
        newItem.count = item.count
        return newItem
      })
      const body = req.body
      body.order = JSON.stringify(formattedOrder).replace(/"/g, '')
      body.createdAt = new Date().toISOString();
      body.done = 0
      const order = await createOrder(body)
      return res.json(order)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async changeOption(req, res, next) {
    try {
      const { id } = req.params
      let { done } = req.body

      const order = await changeDone(id, done)

      return res.json(order)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async destroy(req, res, next) {
    try {
      const {id} = req.params

      const reply = await removeOrder(id)

      return res.json(reply)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new OrderController()