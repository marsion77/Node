const wishlistservive = require("../Services/WishlistService")

const wishlistdata = async(req,res)=>{
    const data = await wishlistservive.createwishlist(req.body)
    res.send(data)
}


const getwishlistdata = async(req,res)=>{
    const data = await wishlistservive.getwishlistdatas(req.params.id)
    res.send(data)
}


module.exports = {
    wishlistdata,
    getwishlistdata
}