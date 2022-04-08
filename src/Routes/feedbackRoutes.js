const express = require('express');
const router = express.Router()
const {feedbckController} = require('../Controller')
const {requireSignin}= require('../MiddleWare/auth')

router.post('/add/feedback', requireSignin,feedbckController.addFeedback);
router.get('/get/feedback', feedbckController.getFeedback);
router.put('/feedback/:feedbackid', feedbckController.updateFeedback);

module.exports = router;