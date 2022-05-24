const mysql = require('mysql');

class DB {
  async connect() {
    const connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'privetmysql',
      database : 'new_schema1'
    });
    connection.connect();
    // connection.query('USE persons;')
    // connection.query('USE world;')
    // connection.query('SELECT * FROM city WHERE name="Kazan" && population>1000000;', function (error, results, fields) {
    //   if (error) throw error;
    //   console.log(results[0]);
    // });
    // async function f() {

    //   try {
    //     await this.connection;
    //   } catch(err) {
    //     console.error(err); // TypeError: failed to fetch
    //   }
    // }
    
    // f();

    this.connection = connection

    return connection
  }

  async create(req, res, next) {
    try {
      const {favorite, text} = req.body

      const todos = await Todos.create({favorite, text, userId: req.user.id})

      return res.json(todos)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
  
    // async destroy(req, res, next) {
    //   try {
    //     const {id} = req.params
  
    //     const reply = await Todos.destroy({where: {id, userId: req.user.id}})
  
    //     return res.json(reply)
    //   } catch (e) {
    //     next(ApiError.badRequest(e.message))
    //   }
    // }
  
    async findAll(conn) {
      const result = await this.connection.query('SELECT * FROM persons;', function (error, results, fields) {
        if (error) throw error;
        return results
      });

      console.group('find class')
      console.log(result)
      console.groupEnd()

      return result
    }
  }
  
  module.exports = new DB()