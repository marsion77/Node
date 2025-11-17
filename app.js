const express = require('express')
const app = express()
const userRouter = require("./src/router/UserRouter")


const database = require("./src/Config/db")

app.use("/user", userRouter)



database.on('open',()=>{
    app.listen(8080,()=>{
console.log('Server is Running');

    })
})

database.on("error",()=>{
    console.log('Error Whule running the server');  
})