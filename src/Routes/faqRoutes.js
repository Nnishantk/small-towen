const express = require('express');
const router = express.Router();
const {faqController} = require('../Controller');


router.post('/add/faq', faqController.addFaq)
router.get('/get/faq', faqController.getFaq)

module.exports = router