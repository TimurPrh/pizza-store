const db = require("./db");

// CREATE TABLE orders (
//   id int NOT NULL AUTO_INCREMENT,
//   name varchar(255) NOT NULL,
//   phone varchar(255) NOT NULL,
//   comment varchar(1020),
//   cart varchar(1020) NOT NULL,
//   createdAt varchar(255),
//   done boolean,

//   PRIMARY KEY (id)
// );

async function getOrders() {
  const result = await db.query(
    `SELECT * FROM orders`
  );

  return result
}

async function createOrder(order) {
  const result = await db.query(
    `INSERT INTO orders 
    (name, phone, comment, cart, createdAt, done)
    VALUES 
    ("${order.name}", "${order.phone}", "${order.comment}", "${order.order}", "${order.createdAt}", "${order.done}")`
  );

  let message = "Error in creating order";

  if (result.affectedRows) {
    message = "Order created successfully";
  }

  return { message };
}

async function removeOrder(id) {
  const result = await db.query(
    `DELETE FROM orders WHERE id=${id}`
  );

  let message = "Error in deleting order";

  if (result.affectedRows) {
    message = "Order deleted successfully";
  }

  return { message };
}

module.exports = {getOrders, createOrder, removeOrder}