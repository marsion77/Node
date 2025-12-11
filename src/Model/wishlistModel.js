const mongoose = require("mongoose")

const wishlistSchema =  new mongoose.Schema(
    {
        userID: {
            type: mongoose.Types.ObjectId           
        },
        productID: {
            type:mongoose.Types.ObjectId
        },
        date:{
            type: Date,
            default: Date.now()
        },
        status:{
            type: String,
            default: "pending"

        }
    }
)

const wishlistModel = mongoose.model("wishlist",wishlistSchema)
module.exports = wishlistModel