const express = require('express')
const port = process.env.PORT || 5000
const employeeRoutes = require('./routes/employee-routes')
const patientRoutes = require('./routes/patients-routes')

const app = express()
const bcrypt = require('bcrypt') // bcrypt will encrypt passwords to be saved in db
const crypto = require('crypto')

//Express middleware
const bodyParser = require('body-parser') // turns response into usable format
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }))
app.use('/api', employeeRoutes)
app.use('/patientApi', patientRoutes)

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})

module.exports = app
