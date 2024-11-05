const express = require("express")

const app = express()

app.get("/product",(req,res) =>{
    res.send("hello")
}) 

app.listen(300,()=>{
    console.log("server is running on port 3000")
})