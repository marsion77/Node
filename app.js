const express = require('express')
const app = express()
const database = require("./src/Config/db")

app.use(express.json())

const userRouter = require("./src/router/UserRouter")
const productRouter = require("./src/Router/ProductRouter")


app.use("/user", userRouter)
app.use("/products",productRouter)





database.on('open',()=>{
    app.listen(8080,()=>{
console.log('Server is Running');

    })
})

database.on("error",()=>{
    console.log('Error While running the server');  
})