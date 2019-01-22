const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

// parses all requst/respones below
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes)

app.use(shopRoutes)








app.listen(5000)
