const express = require('express')
const router = express.Router();


const {getAllColleges, addCollege, getByUserId } = require('../controllers/College-controller');

router.get('/', getAllColleges)
router.post('/addCollege' ,addCollege)
router.get('/user/:id', getByUserId)
// router.post('/signin', signIn) 








module.exports = router