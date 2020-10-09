const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5001
const ejs = require("ejs")

let server = require("http").Server(app)

app.use(express.static("public"))
app.set("view engine","ejs")
app.set("views","./views")
app.get("/",function(req,res){
    res.render("index.ejs")
})

server.listen(port,()=>{
    console.log(`Server is up on ${port} port`)
})