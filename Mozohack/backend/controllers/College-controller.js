const College = require('../models/college.model')
const User = require('../models/User.model')
const mongoose = require('mongoose')



exports.getAllColleges = async (req, res, next) => {
    let colleges;
    try {
        colleges = await College.find().populate('user')       
    } catch (error) {
        return console.log(error)
    }
    if(!colleges){
        return res.status(404).json({message:"No colleges found"})
    }
    return res.status(200).json({colleges:colleges}) // or you can write json({users})
}


// Add College

exports.addCollege = async (req, res, next) => {
    const { name, user} = req.body
    let existingUser
    try {
        existingUser = await User.findById(user)
    } catch (error) {
        return console.log(error)
    }

    if(!existingUser) {
        return res.status(400).json({ message:"Unable to find user by this ID"})
    }

    const college = new College({
        name,
        user
    })

    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await college.save({session})
        existingUser.colleges.push(college)
        await existingUser.save({session})
        await session.commitTransaction()
        //await college.save()
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:error})
    }
    return res.status(200).json({college})
}



// 


exports.getByUserId = async (req, res, next) => {
    const userId = req.params.id
    let userColleges
    try {
        userColleges = await User.findById(userId).populate({path:'colleges'})
        //console.log(userBlogs)
    } catch (error) {
        return console.log(error)
    }
    if(!userColleges){
        return res.status(404).json({message: 'No Colleges found'})
    }
    return res.status(200).json({user: userColleges})
}