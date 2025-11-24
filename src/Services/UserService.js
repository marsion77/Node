const userModel = require("../Model/UserModel")
const body = require("../Controller/UserControler");
const { default: mongoose } = require("mongoose");


const createUserdata = async(body)=>{
    const userData = await userModel.create(body)
    return userData

}

const getAllUser = async()=>{
    const users = await userModel.find({})
    return users
}



const specificUser = async(userId)=>{
const getId = await userModel.findById(new mongoose.Types.ObjectId(userId))
    return getId
}



module.exports = {
    createUserdata,
    getAllUser,
    specificUser
}