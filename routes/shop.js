const express = require('express')
const router = express.Router();
const path = require('path')

const adminData = require('./admin')


// using get/post method exercises exact match for '/'
router.get('/', (req,res,next) =>{
  const products = adminData.products
  res.render('shop', {prods: products, docTitle: 'shop'})
})


module.exports = router
