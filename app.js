const express = require('express')

// initializes a new express object behind the scenes where it manages and stores logic for us
const app = express()

// request goes through files from top to bottom
app.use('/product', (req, res, next )=>{
  console.log('T')
  res.send('<h1> This is our product page </h1>')
})

app.use('/', (req, res, next )=>{
  console.log('T')
  res.send('<h1> This is our home path </h1>')
})



app.listen(5000)
