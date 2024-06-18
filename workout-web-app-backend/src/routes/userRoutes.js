// src/routes/userRoutes.js
const express = require('express');
const { getUserProfile, updateUserProfile, createUserProfile } = require('../controllers/userController');
const auth = require('../config/auth');
const router = express.Router();

router.get('/getprofile', auth, getUserProfile);
router.put('/updateprofile', auth, updateUserProfile);



module.exports = router;
