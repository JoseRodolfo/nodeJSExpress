const express = require('express')
const bodyParser = require('body-parser')

const app = express();

// parses all requst/respones below
app.use(bodyParser.urlencoded({exended:false}))

app.use('/product', (req,res,next) =>{
  console.log(req.body)
  res.redirect('/')
})

app.use('/add-product', (req,res,next) =>{
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></input></form>')
})

app.use('/', (req,res,next) =>{
  res.send('<h1> This is the home page</h1>')
})


app.listen(5000)
