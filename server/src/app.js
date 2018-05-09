const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
const { sequelize } = require('./models')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//Routes
require('./routes')(app)

sequelize.sync().then(() => {
  app.listen(config.port)
  console.log(`Server started at port ${config.port}`)
})
