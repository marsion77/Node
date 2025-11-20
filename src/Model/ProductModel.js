const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        requred: true
    },

    discount: {
        type: String,
        required: true
    },

    mgtdate:{
        type: Number,
        required: true
    },

    expdate: {
        type: Number,
        required: true
    }

})

const ProductModel = mongoose.model("product",ProductSchema)

module.exports = ProductModel