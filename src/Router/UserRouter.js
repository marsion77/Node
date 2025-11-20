const express = require ("express")
router = express.Router()

const userController = require ("../Controller/UserControler")

router.post("/create/user", userController.createUser)
router.get("/getuser",userController.getusers)

module.exports = router 
