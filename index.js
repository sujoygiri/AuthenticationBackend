const express = require('express')
const cors = require('cors')
const session = require('express-session')

const PROTOCOL = 'http'
const PORT = 3000
const HOST = '127.0.0.1'
const app = express()

app.use(cors())

app.listen(PORT,HOST,()=>{
    console.log(`App is running on ${PROTOCOL}://${HOST}:${PORT}`)
})
