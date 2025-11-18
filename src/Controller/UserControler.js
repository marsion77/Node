
const UserService = require('../Services/UserService')

const createUser = async(req,res)=>{
    console.log("The controller is running");
    const data = await UserService.createUserdata(req.body)
    res.send(data)
 }

 module.exports = {
 createUser
}
