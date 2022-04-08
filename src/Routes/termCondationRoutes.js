const express = require('express');
const router = express.Router();
const {termCondationController} = require('../Controller');

router.post('/add-term/condation',termCondationController.addTermCondation)
router.get('/get-term/condation',termCondationController.getAlltermCondation)
router.put('/update-term/condation/:termCondationId',termCondationController.updateTermAndCondation)


module.exports = router