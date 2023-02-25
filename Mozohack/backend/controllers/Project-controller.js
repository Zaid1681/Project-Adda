const Project = require('../models/project.model')
const Department = require('../models/department.model')
const mongoose = require('mongoose')



exports.getAllProjects = async (req, res, next) => {
    let projects;
    try {
        projects = await Project.find().populate('department')       
    } catch (error) {
        return console.log(error)
    }
    if(!projects){
        return res.status(404).json({message:"No departments found"})
    }
    return res.status(200).json({projects:projects}) // or you can write json({users})
}


// Add Department

exports.addProject = async (req, res, next) => {
    const { name, department} = req.body
    let existingDepartment
    try {
        existingDepartment = await Department.findById(department)
    } catch (error) {
        return console.log(error)
    }

    if(!existingDepartment) {
        return res.status(400).json({ message:"Unable to find department by this ID"})
    }

    const project = new Project({
        name,
        department
    })

    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await project.save({session})
        existingDepartment.projects.push(project)
        await existingDepartment.save({session})
        await session.commitTransaction()
        //await project.save()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error})
    }
    return res.status(200).json({project})
}



exports.getByDepartmentId = async (req, res, next) => {
    const departmentId = req.params.id
    let userProjects
    try {
        userProjects = await Department.findById(departmentId).populate({path:'projects'})
        //console.log(userBlogs)
    } catch (error) {
        return console.log(error)
    }
    if(!userProjects){
        return res.status(404).json({message: 'No Departments found'})
    }
    return res.status(200).json({department: userProjects})
}