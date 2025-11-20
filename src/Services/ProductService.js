const productModel = require("../Model/ProductModel");

const createProduct = async (body) => {
    console.log("Create is Working");
    const productData = await productModel.create(body);
    console.log(body);

    return productData;
};

const getAllProduct = async () => {
    return await productModel.find({});
};

module.exports = {
    createProduct,
    getAllProduct
};
