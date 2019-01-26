const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.set('view engine', 'pug')
app.set('views', 'views')


// parses all requst/respones below
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))) //this forwards to any html file making a css request in their 'link' tag.

app.use('/admin', adminData.routes)

app.use(shopRoutes)

app.use((req, res, next) => {
  res.render('404', {pageTitle: '404 Error'})
})

app.listen(5000)
