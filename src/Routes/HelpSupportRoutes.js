const express = require('express')
const router = express.Router()
const {helpSupportController} = require('../Controller');

router.post('/add/help/and/support',helpSupportController.addHelpAndSupport)
router.get('/get/help/and/support',helpSupportController.getHelpSupport)



module.exports = router