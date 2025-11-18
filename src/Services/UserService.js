const userModel = require("../Model/UserModel")
const body = require("../Controller/UserControler")


const createUserdata = async(body)=>{
    // console.log("Service is Working");
    // return 'Service'
    const userData = await userModel.create(body)
    console.log(body);
    
    return userData
    
}


module.exports = {
    createUserdata
}