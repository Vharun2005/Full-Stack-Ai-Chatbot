const express = require('express')
const router = express.Router()
const path = require('path')
const { RegisterUser, logIncheck, validUser ,PostQuestions,GetQuestions} = require('../controlers/UserControler')



router.route('/reguser').post(RegisterUser)
router.route('/loginuser').post(logIncheck)
router.route('/getuser').get(validUser)
router.route('/postquestions').post(PostQuestions)
router.route('/getquestions').post(GetQuestions)






module.exports = router