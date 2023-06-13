const { db } = require("../config/dbsql");

const getAllProducts = () => {
  return db("products").select("id", "name", "price").orderBy("name");
};

const getProduct = () => {
  return db("products")
    .select("id", "name", "price")
    .where("id" == ":id");
};

const insertProduct = () => {
  return db("products").insert(product).returning('*');
};

module.exports = {
  getAllProducts,
    getProduct,
  insertProduct
};
