const Department = require('../models/department.model')
const College = require('../models/college.model')
const mongoose = require('mongoose')



exports.getAllDepartments = async (req, res, next) => {
    let departments;
    try {
        departments = await Department.find().populate('college')       
    } catch (error) {
        return console.log(error)
    }
    if(!departments){
        return res.status(404).json({message:"No departments found"})
    }
    return res.status(200).json({departments:departments}) // or you can write json({users})
}


// Add Department

exports.addDepartment = async (req, res, next) => {
    const { name, college} = req.body
    let existingCollege
    try {
        existingCollege = await College.findById(college)
    } catch (error) {
        return console.log(error)
    }

    if(!existingCollege) {
        return res.status(400).json({ message:"Unable to find college by this ID"})
    }

    const department = new Department({
        name,
        college
    })

    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await department.save({session})
        existingCollege.departments.push(department)
        await existingCollege.save({session})
        await session.commitTransaction()
        //await department.save()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error})
    }
    return res.status(200).json({department})
}


//

exports.getByCollegeId = async (req, res, next) => {
    const collegeId = req.params.id
    let userDepartments
    try {
        userDepartments = await College.findById(collegeId).populate({path:'departments'})
        //console.log(userBlogs)
    } catch (error) {
        return console.log(error)
    }
    if(!userDepartments){
        return res.status(404).json({message: 'No Departments found'})
    }
    return res.status(200).json({college: userDepartments})
}