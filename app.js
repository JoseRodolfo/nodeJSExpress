// require http from node core modules
const http = require('http');
const express = require('express')

// initializes a new express object behind the scenes where it manages and stores logic for us
const app = express()

app.use((req, res, next )=>{
  console.log('in the middleware')
  next() //this allows for middleware to contiue to next middle ware in line
})

app.use((req, res, next )=>{
  console.log('second middleware')
})

// select a port of choice
const port = 5000;

// set up of server
const server = http.createServer (app);

// listens for server, logs when server is running
server.listen(port, () =>{
  console.log('server is running on port 5000')
})
