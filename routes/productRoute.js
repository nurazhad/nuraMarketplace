const express = require('express')
const{getProduct,createProduct} = require('./../src/controllers/productController')
const router = express.Router()

router.get('/product', getProduct)
router.post('/product', createProduct)

module.exports = router