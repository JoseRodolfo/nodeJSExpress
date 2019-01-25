const express = require('express')
const router = express.Router();
const path = require('path')

const adminData = require('./admin')


// using get/post method exercises exact match for '/'
router.get('/', (req,res,next) =>{
  console.log(adminData.products)
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')) //two underscores
})


module.exports = router
