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


 module.exports = {
 createUser, 
 getusers,
 getUserById,
 updateUserById,
 deleteUserById
}
