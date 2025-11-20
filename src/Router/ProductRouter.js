const express = require("express")
router = express.Router()

const ProductController = require("../Controller/ProductController")

router.post("/createproduct", ProductController.createProduct)
router.get("/getproduct",ProductController.getProduct)

module.exports = router 