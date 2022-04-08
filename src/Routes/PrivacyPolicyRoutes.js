const express = require('express');
const router = express.Router();
const {privacyPolicyController} = require('../Controller')

 router.post('/add/privacy/policy',privacyPolicyController.addPrivacyPolicy)
 router.get('/get/privacy/policy',privacyPolicyController.getPrivacyPolicy)
 router.put('/update/privacy/policy/:policyId',privacyPolicyController.updatePrivacypolicy)


module.exports = router