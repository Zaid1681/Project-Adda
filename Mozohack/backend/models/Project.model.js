const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    name : { type: String, required: true },
    department: { type: mongoose.Types.ObjectId, 
        ref:"Department",
        required: true},
}
)

const Project = mongoose.model("Project", projectSchema) //in mongoDB table name will be users
module.exports = Project

