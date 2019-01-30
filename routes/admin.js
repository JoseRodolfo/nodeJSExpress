const express = require('express');
const router = express.Router();
const path = require('path')



// 'get' request are used to retrieve data from server
// /admin/add-product => GET
router.get('/add-product', (req,res,next) => {
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
})

const products = [];

// 'post' request are used to post data to the server
// /admin/add-product => POST
router.post('/add-product', (req,res) => {
  products.push({title: req.body.title, pageTitle: 'Products'});
  res.redirect('/',)
})

exports.routes = router
exports.products = products
