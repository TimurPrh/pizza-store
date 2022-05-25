const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const db = require("../services/db");
const { getMenuItems, removeMenuItem, createMenuItem, updateMenuItem } = require('../services/menu');

class MenuController {
  async getAll(req, res, next) {
    try {
      res.json(await getMenuItems());
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async create(req, res, next) {
    try {
      let {typeid, name, description, price} = req.body
      const {img} = req.files

      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'public', fileName))

      const reply = await createMenuItem({typeid, name, description, price, img: fileName})

      return res.json(reply)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async change(req, res, next) {
    try {
      let {typeid, name, description, price} = req.body
      const {img} = req.files

      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'public', fileName))

      const reply = await updateMenuItem({typeid, name, description, price, img: fileName})

      return res.json(reply)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async destroy(req, res, next) {
    try {
      const {id} = req.params

      const reply = await removeMenuItem(id)

      return res.json(reply)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new MenuController()