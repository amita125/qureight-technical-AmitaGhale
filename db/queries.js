const knex = require('./knex.js')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

//Employee table

function Employees() {
  return knex('employeeTable') //database table
}
// create a hashPassword
const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      err ? reject(err) : resolve(hash)
    })
  })
}

//create a token
const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, data) => {
      err ? reject(err) : resolve(data.toString('base64'))
    })
  })
}

//check the password of the user to the db
const checkPassword = (reqPassword, foundUser) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(reqPassword, foundUser.password, (err, response) => {
      if (err) {
        reject(err)
      } else if (response) {
        resolve(response)
      } else {
        reject(new Error('Passwords do not match'))
      }
    })
  })
}

//update the user taken
const updateUserToken = (token, username) => {
  return Employees().where({ username: username }).update({ token: token })
}

//get the single employee
function getSingle(username) {
  return Employees().where('username', username).first()
}

//add the user to the db table
function add(user) {
  return Employees().insert(user, 'doctor_id')
}

//update the user
function update(username, updates) {
  return Employees().where('username', username).update(updates)
}

//Patient table

function Patients() {
  return knex('patientTable')
}

// to get all patient datas
function getDatas() {
  return Patients()
}

//add patient to the database
function addPatient(patient) {
  return Patients().insert(patient, 'patient_id')
}

//delete the patient details based on the id
function deletePatient(patient_id) {
  return Patients().where('patient_id', patient_id).del()
}

// update the patient details
function PatientUpdate(patient_id, updates) {
  return Patients().where('patient_id', patient_id).update(updates)
}

//get the single patient
function getPatientdata(patientId) {
  return Patients().where('patient_id', patientId)
}

module.exports = {
  getDatas,
  add: add,
  update: update,
  hashPassword: hashPassword,
  createToken: createToken,
  checkPassword: checkPassword,
  updateUserToken: updateUserToken,
  getSingle: getSingle,
  getPatientdata,
  addPatient: addPatient,
  deletePatient: deletePatient,
  PatientUpdate: PatientUpdate,
}
