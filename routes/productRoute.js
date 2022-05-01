const express = require("express");
const {
    getProduct,
    createProduct,
    getProductById,
    deleteProduct,
    // updateProduct,
} = require("./../src/controllers/productController");
const router = express.Router();
const { parse, stringify } = require("flatted");

router.get("/product", getProduct);
router.post("/product", createProduct);
router.get("/product/:id", getProductById);
router.delete("/product/:id", deleteProduct);
// router.put("/product/:id", updateProduct);

module.exports = router;
