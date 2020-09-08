const express = require('express')
const router = express.Router()

const Employees = require('../data/queries')
router.post('/signup', (req, res, next) => {
  const user = req.body
  const username = req.body.username
  Employees.getSingle(username).then((found) => {
    if (found) {
      res.status(409).json({ error: 'username already present' })
    } else {
      Employees.hashPassword(user.password)
        .then((hashedPassword) => {
          delete user.password
          user.password = hashedPassword
        })
        .then(() => Employees.createToken())
        .then((token) => (user.token = token))
        .then(() => Employees.add(user))
        .then((user) => {
          delete user.password
          res.status(201).json({ message: 'Signup Complete!' })
        })
        .catch((err) => console.error(err))
    }
  })
})

router.post('/signin', (req, res, next) => {
  console.log('ss')
  const userReq = req.body
  let employee
  Employees.getSingle(userReq.username)
    .then((foundUser) => {
      employee = foundUser
      return Employees.checkPassword(userReq.password, foundUser)
    })
    .then((res) => Employees.createToken())
    .then((token) => Employees.updateUserToken(token, employee.username))
    .then(() => {
      delete employee.password
      const employeeInfo = {
        user_id: employee.user_id,
        userName: employee.name,
        userSurname: employee.surname,
      }
      res.status(200).json({ employeeInfo })
    })
    .catch((err) =>
      res
        .status(404)
        .json({ message: 'either username and password did not mach' }),
    )
})

router.put('/:username', (req, res, next) => {
  if (
    req.body.hasOwnProperty('username') ||
    req.body.hasOwnProperty('doctor_id')
  ) {
    return res.status(422).json({
      error: 'You cannot update username or id field',
    })
  }
  Employees.update(req.params.username, req.body)
    .then(function () {
      return Employees.getSingle(req.params.username)
    })
    .then(function (showEmployee) {
      res.status(200).json(showEmployee)
    })
    .catch(function (error) {
      next(error)
    })
})

module.exports = router
