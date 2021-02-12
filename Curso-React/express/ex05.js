const express = require('express')
const server = express()
const router = require('./ex05_routes')

server.use('/api',router)

server.listen(8080,() => console.log('Executando...'))