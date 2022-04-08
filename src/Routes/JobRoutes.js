const express = require('express');
const router = express.Router();
const {jobController} = require('../Controller');

router.post('/job/',jobController.addJob);
router.get('/job/',jobController.getJob);
router.put('/job/:jobid',jobController.updateJob);
router.delete('/job/:jobid',jobController.deleteJob);


module.exports = router