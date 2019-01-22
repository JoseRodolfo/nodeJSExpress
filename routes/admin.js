const express = require('express');
const router = express.Router();

// get request are used to retrieve data from server
router.get('/add-product', (req,res,next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></input></form>')
})

// post request are used to post data to the server
router.post('/product', (req,res,next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router
