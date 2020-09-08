const express = require('express')
const router = express.Router()

const Patients = require('../db/queries')
router.get('/datas', (req, res, next) => {
  Patients.getDatas()
    .then(function (showDatas) {
      res.status(200).json(showDatas)
    })
    .catch((error) => {
      res.status(500).json({ message: 'cannot retrieve patients data ' })
    })
})

router.post('/newPatient', (req, res, next) => {
  const patient = req.body
  Patients.addPatient(patient)
    .then(() => {
      res.status(200).json({ message: 'patient submitted' })
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: 'cannot create' })
    })
})

router.get('/:patientId', (req, res, next) => {
  Patients.getPatientdata(req.params.patientId)
    .then(function (showData) {
      res.status(200).json(showData)
    })
    .catch((error) => {
      res.status(500).json({ message: 'cannot retrieve patient data' })
    })
})

router.put('/:patientId', (req, res, next) => {
  Patients.PatientUpdate(req.params.patientId, req.body)
    .then(function (showData) {
      res.status(200).json(showData)
    })
    .catch((error) => {
      res.status(500).json({ message: 'cannot update' })
    })
})

router.delete('/deletePatient', (req, res, next) => {
  const patientId = req.body.patient_id
  console.log(req.body)
  Patients.deletePatient(patientId)
    .then(function () {
      res.status(200).json({ message: 'Delete successful!' })
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ message: 'cannot delete patients' })
    })
})

module.exports = router
