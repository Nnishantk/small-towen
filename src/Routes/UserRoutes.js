const express = require('express');
const router = express.Router();
const {userController} = require('../Controller');
const {upload_documents} = require('../MiddleWare/fileUpload')
const validator = require('../MiddleWare/Validator');
const cpupload = upload_documents.fields([{ name: 'idProof', maxCount: 1 }, { name: 'resume', maxCount: 1 }, { name: 'addressProof', maxCount: 1 }])


router.post('/signup' ,cpupload,userController.register);
router.post('/signin'   ,userController.login);
router.get('/getalluser', userController.getAllUser);
router.post('/otpsend', userController.sendMail);
router.post('/change-password', userController.changePassword);
router.post('/fb/login',validator.login(),userController.loginWithFaceBook);
router.get("/:userId", userController.getuserFromFb);

module.exports = router;