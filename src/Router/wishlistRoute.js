const express = require("express")
const router = express.Router()

const wishlistController = require("../Controller/WishlistController")

router.post("/create/wishlist",wishlistController.wishlistdata)

router.get("/getwishlistdata/:id",wishlistController.getwishlistdata)



module.exports = router