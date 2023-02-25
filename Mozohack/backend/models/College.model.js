const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const collegeSchema = new Schema({
    name : { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, 
        ref:"User",
        required: true},
    departments : [{type: mongoose.Types.ObjectId, ref:"Department", required: true}],
    //projects : [{type: mongoose.Types.ObjectId, ref:"Blog", required: true}]
}
)

const College = mongoose.model("College", collegeSchema) //in mongoDB table name will be users
module.exports = College

