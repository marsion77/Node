const express = require ("express")
const 
router = express.Router()
const userController = require ("../Controller/UserControler")

router.post("/create/user", userController.createUser)

module.exports = router 


