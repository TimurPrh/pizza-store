// const uuid = require('uuid')
// const path = require('path')
const ApiError = require('../error/ApiError')
const db = require("../services/db");

class MenuController {
  async getAll(req, res) {
    const rows = await db.query(
      `SELECT * FROM persons`
    );
  
    return res.json(rows)
  }

  async create(req, res, next) {
    async function createMenuItem(menuItem) {
      const result = await db.query(
        `INSERT INTO persons 
        (LastName, FirstName, Age) 
        VALUES 
        ("${menuItem.LastName}", "${menuItem.FirstName}", "${menuItem.Age}")`
      );
    
      let message = "Error in creating menu item";
    
      if (result.affectedRows) {
        message = "Menu item created successfully";
      }
    
      return { result };
    }
    
    try {
      const menuItem = await createMenuItem(req.body)

      return res.json(menuItem)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async change(req, res, next) {
    async function updateMenuItem(id, menuItem) {
      const result = await db.query(
        `UPDATE persons 
        SET name="${menuItem.LastName}", released_year=${menuItem.FirstName}, githut_rank=${menuItem.Age}
        WHERE personid=${id}`
      );
    
      let message = "Error in updating programming language";
    
      if (result.affectedRows) {
        message = "Programming language updated successfully";
      }
    
      return { message };
    }

    try {
      const {id} = req.params
      const {favorite} = req.body

      const todo = await Todos.findOne({ where: { id, userId: req.user.id } });

      if (todo) {
        todo.favorite = favorite;
        await todo.save();
      }

      return res.json(todo)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async destroy(req, res, next) {
    try {
      const {id} = req.params

      const reply = await Todos.destroy({where: {id, userId: req.user.id}})

      return res.json(reply)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new MenuController()