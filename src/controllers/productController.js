const Product = require('./../models/productModel')
const upload = require('./../../middleware/input')

const getProduct = async(req, res) => {
    try {
        const Products = await Product.find()
        res.json(Products)
    } catch (error) {
        res.status(500)
        .json({
            message : error.message
        })
    }
}

const createProduct = async(req, res) => {
    upload(req, res, (err) => {
        if(err){
            console.log(err)
        }else{
            const newProduct = new Product({
                name : req.body.name,
                price : req.body.price,
                stock : req.body.stock,
                image : req.file.filename,
                desc : req.body.desc,
            })
            newProduct.save().then(() => res.send("Product Added!"))
            .catch((err) => console.log(err))
        }
    })
}
module.exports = {getProduct,createProduct}