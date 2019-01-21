// require http from node core modules
const http = require('http');
const express = require('express')

// initializes a new express object behind the scenes where it manages and stores logic for us
const app = express()

app.use((req, res, next )=>{
  console.log('in the middleware')
  res.send('<h1> hello from express </h1>')
  // next() //we should call "next()" if we dont send a response, otherwise the request will die here and not continue to the next middlware
})

app.use((req, res, next )=>{
  console.log('second middleware')
})

// app.listen(), replaces all code commented below it, note there is no need to require http neither.
app.listen(5000)


// // select a port of choice
// const port = 5000;
//
// // set up of server
// const server = http.createServer (app);
//
// // listens for server, logs when server is running
// server.listen(port, () =>{
//   console.log('server is running on port 5000')
// })
