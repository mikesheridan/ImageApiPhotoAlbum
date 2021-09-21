const express = require('express')
// Use dotenv to read .env vars into Node
require('dotenv').config()

var path = require('path')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 5001
const ROOT_URL = dev
  ? `http://localhost:${port}`
  : ''

const server = express()
// const handle = server.getRequestHandler();

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  server.use(express.static('client/build'))
}

// Add headers
server.use(function (req, res, next) {
  // Website you wish to allow to connect
  // test for https and set the approprate protocol
  const urlSecureState = req.connection.encrypted ? '' : ''
  const accessHeader = dev ? 'http://localhost:3000' : urlSecureState
  res.setHeader('Access-Control-Allow-Origin', accessHeader)

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})

server.use(express.json())

// starting express server
server.listen(port, err => {
  if (err) throw err
  console.log('Environment: ', process.env.NODE_ENV)
  console.log(`> Ready on ${ROOT_URL}`) // eslint-disable-line no-console
})
