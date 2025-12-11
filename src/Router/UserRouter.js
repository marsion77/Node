const express = require ("express")
router = express.Router()

const userController = require ("../Controller/UserControler")

// Route To post
router.post("/create/user", userController.createUser)



// Route To get
router.get("/getuser",userController.getusers)



// Route To Get By Id
router.get("/getuser/:id", userController.getUserById)



// Route to Update By ID
router.put("/update/user/:id", userController.updateUserById);

// Route to Delete
router.delete("/delete/user/:id", userController.deleteUserById);



// DELETE USER
router.delete("/delete/userdata/:id",userController.deleteUserData)

// Route to update by ID
router.put("/put/user/:id",userController.putdata)

// Route to Login
router.post("/login", userController.loginUser);

// forgot password
router.post("/forgot-password",userController.forgotPassword)


// Verify OTP
router.post("/verify-otp", userController.verifyOtp);


// Login
router.post("/userlogin",userController.userLogin)



module.exports = router 
