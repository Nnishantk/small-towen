const express = require('express');
const route = express.Router();


route.use('/user',require('./UserRoutes'));
route.use('/feedback', require('./feedbackRoutes'));
route.use('/condation', require('./termCondationRoutes'));
route.use('/privacy', require('./PrivacyPolicyRoutes'));
route.use('/help-support',require('./HelpSupportRoutes'));	
route.use('/faq',require('./faqRoutes'));
route.use('/job', require('./JobRoutes'));
route.use('/address', require('./AddressRoutes'));

module.exports = route