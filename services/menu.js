const db = require("./db");

// CREATE TABLE menu (
//   id int NOT NULL AUTO_INCREMENT,
//   typeid int NOT NULL,
//   name varchar(255) NOT NULL,
//   description varchar(510),
//   price int NOT NULL,
//   img varchar(255) NOT NULL,
//   PRIMARY KEY (id)
// );

async function getMenuItems() {
  const rows = await db.query(
    `SELECT * FROM menu`
  );

  return {
    rows
  };
}

async function createMenuItem(menuItem) {
  const result = await db.query(
    `INSERT INTO menu 
    (typeid, name, description, price, img) 
    VALUES 
    ("${menuItem.typeid}", "${menuItem.name}", "${menuItem.description}", "${menuItem.price}", "${menuItem.img}")`
  );

  let message = "Error in creating menu item";

  if (result.affectedRows) {
    message = "Menu item created successfully";
  }

  return { message };
}

async function updateMenuItem(id, menuItem) {
  const result = await db.query(
    `UPDATE menu 
    SET typeid="${menuItem.typeid}", name=${menuItem.name}, description=${menuItem.description}, 
    price=${menuItem.price}, img=${menuItem.img} 
    WHERE id=${id}`
  );

  let message = "Error in updating menu item";

  if (result.affectedRows) {
    message = "Menu item updated successfully";
  }

  return { message };
}

async function removeMenuItem(id) {
  const result = await db.query(
    `DELETE FROM menu WHERE id=${id}`
  );

  let message = "Error in deleting menu item";

  if (result.affectedRows) {
    message = "Menu item deleted successfully";
  }

  return { message };
}

module.exports = {
  getMenuItems,
  createMenuItem,
  updateMenuItem,
  removeMenuItem,
};