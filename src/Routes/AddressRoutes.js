const express = require('express');
const router = express.Router();
const {addressController} = require('../Controller');
const {requireSignin}= require('../MiddleWare/auth')


router.post('/add/address', requireSignin,addressController.addAddress)
router.get('/get/address', addressController.getAddress)

module.exports = router