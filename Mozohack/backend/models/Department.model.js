const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    name : { type: String, required: true },
    college: { type: mongoose.Types.ObjectId, 
        ref:"College",
        required: true},
    projects : [{type: mongoose.Types.ObjectId, ref:"Project", required: true}]
}
)

const Department = mongoose.model("Department", departmentSchema) //in mongoDB table name will be users
module.exports = Department

