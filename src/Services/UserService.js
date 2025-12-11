const sendEmail = require("../../utils/mailer");
const CredentialModel = require("../Model/credentialModel");
const userModel = require("../Model/UserModel")
const { default: mongoose } = require("mongoose");
const crypto = require("crypto")
const jwt = require("jsonwebtoken")




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



// Put Function
const putuserdata = async(id,updatebody)=>{
    const checks = await userModel.findById(new mongoose.Types.ObjectId(id))

    if(!checks){
        console.log("User Not Found");
        
    }else{
        const updateuser = await userModel.findByIdAndUpdate(new mongoose.Types.ObjectId(id),updatebody,{new:true})
        return updateUser
    }
}


// Login Function
const loginCheck = async (email, password) => {
    const user = await userModel.findOne({ email: email });

    if (!user) return null;

    // simple plain-text comparison (upgrade to bcrypt later)
    if (user.password !== password) return null;

    return user;
};

// Password-Generating function
const forgotpasswordData = async (body) => {
    console.log(body);

    const checkUser = await userModel.findOne({ email: body.email });
    console.log(checkUser);

    if (!checkUser) {
        return { message: "user not found" };
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Send OTP to user
    await sendEmail(body.email, otp);

    // Create or Update existing OTP
    await CredentialModel.findOneAndUpdate(
        { email: body.email },            // find
        { OTP: otp, date: new Date(),
        expiresAt: new Date(Date.now() + 300000)  

         },   // update data
        { upsert: true, new: true }     
    );

    return {
        message: "OTP generated & stored successfully",
        success: true
    };
};


// Verify OTP
const verifyOtpData = async (body) => {
    console.log(body.email);
    
    const { email, otp } = body;

    // Step 1: Check OTP record exists
    const otpRecord = await CredentialModel.findOne({"email": body.email });
    console.log(otpRecord);
    

    if (!otpRecord) {
        return { success: false, message: "OTP not found. Please request a new one." };
    }

    // Step 2: Check expiration
    if (new Date() > otpRecord.expiresAt) {
        return { success: false, message: "OTP expired. Please request a new one." };
    }

    // Step 3: Match OTP
    if (otpRecord.OTP != otp) {
        return { success: false, message: "Invalid OTP. Please try again." };
    }

    // Optional: Delete OTP after successful validation
    // await CredentialModel.deleteOne({ email });

    return {
        success: true,
        message: "OTP verified successfully"
    };
};


const userloginData = async(body)=>{

    const userdata = await userModel.findOne({"email":body.email})
    if(!userdata){
        return { status: false, message: "User not found" };
    }

    const jwt_code = crypto.randomBytes(64).toString("hex");
   console.log(jwt_code,"JWT_SECRET");

    const token = jwt.sign({payload:userdata},jwt_code,{ expiresIn: "1d" })

    return{
        status: true,
        message: "Login Successful",
        Token: token
    }



}


module.exports = {
    createUserdata,
    getAllUser,
    specificUser,
    updateUser,
    deleteUser,
    deleteUserData,
    putuserdata,
    loginCheck,
    forgotpasswordData,
    verifyOtpData,
    userloginData
}