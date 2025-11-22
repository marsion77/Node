const UserService = require('../Services/UserService')



const createUser = async(req,res)=>{
    const data = await UserService.createUserdata(req.body)

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
