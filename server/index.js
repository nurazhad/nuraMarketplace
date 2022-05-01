const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3000
const productRouter = require('./../routes/productRoute')
const multer = require('multer')
const { parse, stringify } = require("flatted");

// const url = "mongodb://localhost:27017";
const url =
  "mongodb://nura:nanurahman@cluster0-shard-00-00.q39cg.mongodb.net:27017,cluster0-shard-00-01.q39cg.mongodb.net:27017,cluster0-shard-00-02.q39cg.mongodb.net:27017/marketplace?ssl=true&replicaSet=atlas-biczj1-shard-0&authSource=admin&retryWrites=true&w=majority";
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open',() => console.log('database connected'))
app.use(express.json())
app.use(productRouter)