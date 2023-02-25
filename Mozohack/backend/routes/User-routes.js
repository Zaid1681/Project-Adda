const express = require('express')
const router = express.Router();
const {getAllUsers, signIn, signUp } = require('../controllers/User-controller');

router.get('/', getAllUsers)
router.post('/signup' ,signUp)

router.post('/signin', signIn) 








module.exports = router