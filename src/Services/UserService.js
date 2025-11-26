const userModel = require("../Model/UserModel")
const body = require("../Controller/UserControler");
const { default: mongoose } = require("mongoose");



// Creating User
const createUserdata = async(body)=>{
    const userData = await userModel.create(body)
    return userData

}


// Getting User
const getAllUser = async()=>{
    const users = await userModel.find({})
    return users
}


// Getting Specigic User
const specificUser = async(userId)=>{
const getId = await userModel.findById(new mongoose.Types.ObjectId(userId))
    return getId
}


// Updating User
const updateUser = async (userId, updateData) => {
    const updatedUser = await userModel.findByIdAndUpdate(
        userId,
        updateData,
        { new: true } // returns the updated document
    );
    return updatedUser;
};


// Deleting User
const deleteUser = async (userId) => {
    const deletedUser = await userModel.findByIdAndDelete(userId);
    return deletedUser;
};


module.exports = {
    createUserdata,
    getAllUser,
    specificUser,
    updateUser,
    deleteUser
}