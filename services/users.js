const db = require("./db");

// CREATE TABLE users (
//   id int NOT NULL AUTO_INCREMENT,
//   login varchar(255) NOT NULL UNIQUE,
//   password varchar(255) NOT NULL,
//   PRIMARY KEY (id)
// );

async function findUser(login) {
  const result = await db.query(
    `SELECT * FROM users WHERE login="${login}"`
  )

  return result
}

module.exports = {findUser}