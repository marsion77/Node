const express = require("express")
router = express.Router()

const ProductController = require("../Controller/ProductController")

router.post("/createproduct", ProductController.createProduct)
router.get("/getproduct",ProductController.getProduct)


router.get("getproduct/:id",ProductController.getProductbyId)

router.put("put/product/:id",ProductController.updateproduct)


module.exports = router   