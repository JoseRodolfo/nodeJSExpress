const express = require('express');
const router = express.Router();
const path = require('path')

// 'get' request are used to retrieve data from server
// /admin/add-product => GET
router.get('/add-product', (req,res,next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

// 'post' request are used to post data to the server
// /admin/add-product => POST
router.post('/add-product', (req,res,next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router
