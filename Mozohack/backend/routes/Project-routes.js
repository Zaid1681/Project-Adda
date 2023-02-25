const express = require('express')
const router = express.Router();


const {getAllProjects, addProject, getByDepartmentId } = require('../controllers/Project-controller');

router.get('/', getAllProjects)
router.post('/addProject' ,addProject)
router.get('/department/:id', getByDepartmentId)
// router.post('/signin', signIn) 








module.exports = router