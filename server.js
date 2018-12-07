const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const okSuccess = JSON.parse(fs.readFileSync('./sample/oke/success.json', 'UTF-8'))
const okError = JSON.parse(fs.readFileSync('./sample/oke/error.json', 'UTF-8'))

//server.use(bodyParser.urlencoded({extended: true}))
//server.use(bodyParser.json())
server.use(jsonServer.defaults());

server.use(jsonServer.bodyParser)

server.post('/api/stock', (req, res) => {
  console.log(req.body);
  res.status(200).json(okSuccess)
})

// server.use(/^(?!\/user).*$/,  (req, res, next) => {
//     next()
// })

server.use(router)

server.listen(8000, () => {
  console.log('Run Auth API Server')
})