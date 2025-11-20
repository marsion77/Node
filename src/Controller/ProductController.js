const createProduct = async (req, res) => {
  console.log("The Product Controller iss Working");

  const productdata = await UserProduct.createProduct(req.body);

  res.send(data);
};


module.exports = {
    productdata
}