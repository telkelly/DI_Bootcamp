const express = require("express");
const router = express.Router();

const { _getAllProducts, _getProduct, _insertProduct } = require("../controllers/products");

router.get("/api/products", _getAllProducts);
router.get("/api/products/:id", _getProduct);
router.post("/api/products", _insertProduct);

//hw
router.put("/api/products", _updateProduct);
router.delete("/api/products", _deleteProduct);

module.exports = {
    router
}