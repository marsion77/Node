const ProductService = require("../Services/ProductService")


const createProduct = async (req, res) => {
  console.log("The Product Controller is Working");
  const productdata = await ProductService.createProduct(req.body);
  res.send(productdata);
};


const getProduct = async(req,res)=>{
  const productdata = await ProductService.getAllProduct()
  res.send(productdata)
}


const getProductbyId = async(req,res)=>{
  const data = await ProductService.specificproduct(req.params)
  res.send(data)
}

module.exports = {
  createProduct,
  getProduct,

  getProductbyId


}