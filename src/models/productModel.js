const mongoose = require('mongoose')

const Product = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type : String,
        required : true
    },
    stock : {
        type : String,
        required : true
    },
    image : {
        type : String,
    },
    desc : {
        type : String,
    }
})

module.exports = mongoose.model("Products", Product)