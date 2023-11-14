const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const nolanRoutes = require('./routers/nolan')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/nolan', nolanRoutes)

app.get('/', (req, res) => {
  res.send({
    message: "welcome",
    description: "Christopher Nolan Movies API",
    endpoints: [
      "GET    /"
    ]
  })
})


module.exports = app
