const userModel = require("../Model/UserModel")
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


// delete data
const deleteUserData = async(id)=>{
    console.log(id,"idddd");

    const checkUser = await userModel.findById(new mongoose.Types.ObjectId(id))
    console.log(checkUser,"checkUser");
    if(!checkUser){
        console.log("user not found");     
    }
    const deleteData = await userModel.findByIdAndDelete(new mongoose.Types.ObjectId(id))
    return deleteData
}




const putuserdata = async(id,updatebody)=>{
    const checks = await userModel.findById(new mongoose.Types.ObjectId(id))

    if(!checks){
        console.log("User Not Found");
        
    }else{
        const updateuser = await userModel.findByIdAndUpdate(new mongoose.Types.ObjectId(id),updatebody,{new:true})
        return updateUser
    }
}




module.exports = {
    createUserdata,
    getAllUser,
    specificUser,
    updateUser,
    deleteUser,
    deleteUserData,
    putuserdata
}