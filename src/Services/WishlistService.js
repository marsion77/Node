const wishlistModel = require("../Model/wishlistModel")
const userModel = require("../Model/UserModel")
const { default: mongoose } = require("mongoose")


const getwishlistdatas = async (userid) => {

    const userdata = new mongoose.Types.ObjectId(userid);

    const values = await userModel.aggregate([
        {
            $match: { _id: userdata }
        },
        {
            $lookup: {
                from: "wishlists",
                localField: "_id",
                foreignField: "userID",
                as: "wishlistData"
            }
        },
        {
            $lookup: {
                from: "products",
                localField: "wishlistData.productID",
                foreignField: "_id",
                as: "productData",
                // pipeline: [
                //     {
                //         $project: {
                //             name: 1,
                //             expiry: 1
                //         }
                //     }
                // ]
            }
        },
        {
            $project: {
                _id: 1,
                name: 1,
                email: 1,
                productData: 1,
                // wishlistData: 1
            }
        }
    ]);

    return values;
};
 

module.exports = {
    // createwishlist,
    getwishlistdatas
} 