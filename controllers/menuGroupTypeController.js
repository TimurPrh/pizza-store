const ApiError = require('../error/ApiError');
const { removeMenuGroupType, updateMenuGroupType, createMenuGroupType, getMenuGroupTypes } = require('../services/types');


class MenuController {
  async getAll(req, res) {
    try {
      res.json(await getMenuGroupTypes());
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async create(req, res, next) {
    try {
      const type = await createMenuGroupType(req.body)

      return res.json(type)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async change(req, res, next) {
    try {
      const reply = await updateMenuGroupType(req.params.id, req.body);

      return res.json(reply)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async destroy(req, res, next) {
    try {
      const {id} = req.params

      const reply = await removeMenuGroupType(id)

      return res.json(reply)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new MenuController()