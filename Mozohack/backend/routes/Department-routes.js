const express = require('express')
const router = express.Router();


const {getAllDepartments, addDepartment, getByCollegeId } = require('../controllers/Department-controller');

router.get('/', getAllDepartments)
router.post('/addDepartment' ,addDepartment)
router.get('/college/:id', getByCollegeId)
// router.post('/signin', signIn) 








module.exports = router