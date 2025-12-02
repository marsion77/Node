const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    mobile: {
        type: Number,
        // required: true
    },
    age:{
        type: Number,
        // required:true
    },
    email:{
        type: String,
        // required: true
    },
    gender:{
        type: String,
        // required: true
    },
    password:{
        type: Number
        // required: true
    }
    
})

const userModel = mongoose.model("user",userSchema)
module.exports = userModel