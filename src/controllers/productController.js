const Product = require("./../models/productModel");
const upload = require("./../../middleware/input");
const { parse, stringify } = require("flatted");

const getProduct = async (req, res) => {
  try {
    const Products = await Product.find();
    res.json(Products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        image: req.file.filename,
        desc: req.body.desc,
      });
      newProduct
        .save()
        .then(() => res.send("Product Added!"))
        .catch((err) => console.log(err));
    }
  });
};

const getProductById = async (req, res) => {
  try {
    const Products = await Product.findById(req.params.id);
    res.json(Products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deleteProducts = await Product.deleteOne({
      _id: req.params.id,
    });
    res.status(200).json(deleteProducts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// const updateProduct = Object.assign({}, req.body);

// const updateProduct = async(req, res) => {
//     upload(req, res, (err) => {
//         if(err){
//             console.log(err)
//         }else{
// const newProduct = new Product({
//   name: req.body.name,
//   price: req.body.price,
//   stock: req.body.stock,
//   image: req.file.filename,
//   desc: req.body.desc,
// });
// const updateProduct = Product.updateOne(
//           {
//             _id: req.params.id,
//           },
//           {
//             $set: {
//               name: req.body.name,
//               price: req.body.price,
//               stock: req.body.stock,
//               image: req.file.filename,
//               desc: req.body.desc,},

//           }
//         );
//         res.status(200).json(updateProduct)
//     }
// })
// }
module.exports = {
  getProduct,
  createProduct,
  getProductById,
  deleteProduct,
  // updateProduct,
};
