const ProductModel = require("../Model/ProductModel");
const body = require("../Controller/ProductController")
const { default: mongoose } = require("mongoose");


const createProduct = async (body) => {
    console.log("Create is Working");
    const productData = await ProductModel.create(body);
    console.log(body);

    return productData;
};

const getAllProduct = async () => {

    return await ProductModel.find({});
};


const specificproduct = async(productID)=>{
    const getID = await ProductModel.findById(new mongoose.Types.ObjectId(productID))
    console.log(getID);
    
    return getID
}

module.exports = {
    createProduct,
    getAllProduct,

    specificproduct
};
