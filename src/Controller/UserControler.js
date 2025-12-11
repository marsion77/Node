const UserService = require('../Services/UserService')



// Creating User
const createUser = async(req,res)=>{
    const data = await UserService.createUserdata(req.body)

    res.send(data)
 }


//  Getting User
 const getusers = async(req,res) =>{
    const data = await UserService.getAllUser()
    res.send(data)
 }

// Getting Specific User
 const getUserById = async(req,res)=>{
const data = await UserService.specificUser(req.params)
res.send(data)
}


// Updating User
const updateUserById = async (req, res) => {
    const userId = req.params.id;
    const data = req.body;

    const updatedUser = await UserService.updateUser(userId, data);

    if (!updatedUser) {
        return res.status(404).send({ message: "User not found" });
    }

    res.send(updatedUser);
};


// Deleting User
const deleteUserById = async (req, res) => {
    const userId = req.params.id;

    const deletedUser = await UserService.deleteUser(userId);

    if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
};


// delete user data

const deleteUserData = async(req,res)=>{
    const data = await UserService.deleteUserData(req.params.id);
    res.send(data)

}

// Put User
const putdata = async(req,res)=>{
    const data = await UserService.putuserdata(req.params.id,req.body);
    res.send(data)
}


// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log("Incoming payload:", email, password);


    const user = await UserService.loginCheck(email, password);

    if (!user) {
        console.log("❌ No match found – invalid credentials");
        return res.status(404).send({ message: "Invalid credentials" });
    }

    console.log("✅ Login successful:", user.name);
    res.send({ message: "Login success", user });
};

// Forgot Password
const forgotPassword = async(req,res)=>{
    const data = await UserService.forgotpasswordData(req.body)
    res.send(data)
}


// Verify OTP
const verifyOtp = async (req, res) => {
    try {
        const data = await UserService.verifyOtpData(req.body);
        res.send(data);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
};


// Login

const userLogin = async(req,res)=>{
      const data = await UserService.userloginData(req.body)
      res.send(data)
}



 module.exports = {
 createUser, 
 getusers,
 getUserById,
 updateUserById,
 deleteUserById,
 deleteUserData,
 putdata,
 loginUser,
 forgotPassword,
 verifyOtp,
 userLogin
}
