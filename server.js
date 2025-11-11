const express = require('express')
const app = express()

const database = require("./src/config/db")

database.on('open',()=>{
    app.listen(8080,()=>{
console.log('Server is Running');

    })
})

database.on("error",()=>{
    console.log('Error Whule running the server');
    
})