const UserService = require('../Services/UserService')

const createUser = async(req,res)=>{
    console.log("The controller is running");
    const data = await UserService.createUserdata(req.body)
    console.log(req.body,"Body created")
    res.send(data)
 }

 const getusers = async(req,res) =>{
    const data = await UserService.getAllUser()
    res.send(data)
 }


 const getUserById = async(req,res)=>{
const data = await UserService.specificUser(req.params)
res.send(data)
}

 module.exports = {
 createUser, 
 getusers,
 getUserById
}
