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



router.put("/put/user/:id",userController.putdata)

module.exports = router 
