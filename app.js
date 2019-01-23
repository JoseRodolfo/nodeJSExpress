const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();


// parses all requst/respones below
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))) //this forwards us to any html file making a css request in their 'link' tag. 

app.use('/admin', adminRoutes)

app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(5000)
