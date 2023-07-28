const express = require("express");
const router = express.Router();

const { _getAllProducts, _getProduct } = require("../controllers/products");

router.get("/api/products", _getAllProducts);
router.get("/api/products/:id", _getProduct);


module.exports = {
    router
}