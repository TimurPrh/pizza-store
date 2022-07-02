const db = require("./db");

// CREATE TABLE types (
//   id int NOT NULL AUTO_INCREMENT,
//   type varchar(255) NOT NULL UNIQUE,
//   name varchar(255) NOT NULL UNIQUE,
//   PRIMARY KEY (id)
// );

async function getMenuGroupTypes() {
  const result = await db.query(
    `SELECT * FROM types`
  );

  return result
}

async function createMenuGroupType(menuGroupType) {
  const result = await db.query(
    `INSERT INTO types 
    (type, name)
    VALUES 
    ("${menuGroupType.type}", "${menuGroupType.name}")`
  );

  let message = "Error in creating type";

  if (result.affectedRows) {
    message = "Type created successfully";
  }

  return { message };
}

async function updateMenuGroupType(id, menuGroupType) {
  const result = await db.query(
    `UPDATE types 
    SET type="${menuGroupType.type}", name="${menuGroupType.name}"
    WHERE id=${id}`
  );

  let message = "Error in updating type";

  if (result.affectedRows) {
    message = "Type updated successfully";
  }

  return { message };
}

async function removeMenuGroupType(id) {
  const result = await db.query(
    `DELETE FROM types WHERE id=${id}`
  );

  let message = "Error in deleting type";

  if (result.affectedRows) {
    message = "Type deleted successfully";
  }

  return { message };
}

module.exports = {getMenuGroupTypes, createMenuGroupType, updateMenuGroupType, removeMenuGroupType}