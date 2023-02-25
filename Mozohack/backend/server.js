const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//const bodyParser = require("body-parser")
require('dotenv').config();

const port = process.env.PORT || 5000
const DB = process.env.DATABASE
const app = express();
//var ObjectId = require('mongodb').ObjectID;
app.use(cors())


//app.use(bodyParser.urlencoded({ extended: true }));
//mongoose.connect(("mongodb://localhost:27017/blog-app-new"+"-replicaSet=rs")
mongoose.set('strictQuery', true);
mongoose.connect(DB).then(()=> console.log("MongoDB connected")).catch((err)=> console.log(err))
app.use(express.json())

const userRouter = require('./routes/User-routes')
app.use('/api/user',userRouter)


const collegeRouter = require('./routes/College-routes')
app.use('/api/college',collegeRouter)

const departmentRouter = require('./routes/Department-routes')
app.use('/api/department',departmentRouter)

const projectRouter = require('./routes/Project-routes')
app.use('/api/project',projectRouter)


app.listen(port, () => {
    console.log("Server Started at Port " + port)
})