const ProductModel = require("../Model/ProductModel");
const { default: mongoose } = require("mongoose");

const createProduct = async (body) => {
  console.log("Create is Working");

  const productData = await ProductModel.create(body);
  return productData;
};

const getAllProduct = async () => {
  return await ProductModel.find({});
};

const specificproduct = async (productID) => {
  const getID = await ProductModel.findById(productID);
  return getID;
};



const updateProductById = async (productID, updatedproduct) => {
  const pid = await ProductModel.findById(new mongoose.Types.ObjectId(productID));
  console.log(productID);
  

  if (!pid) {
    console.log("Product Not Found");
  }

  const finalpid = await ProductModel.findByIdAndUpdate(new mongoose.Types.ObjectId(
    productID),
    updatedproduct,
    { new: true }
  );
 return finalpid;
 
};

module.exports = {
  createProduct,
  getAllProduct,
  specificproduct,
  updateProductById,
};
