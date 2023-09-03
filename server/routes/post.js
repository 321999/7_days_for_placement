const express=require("express");
const route=express.Router();

 


route.get("/",(req,res)=>{
res.send("<h1>jai shree raam</h1>");
})
route.get("/ki",(req,res)=>{
    res.send("<marquee>this is the callback functio</marquee>")
})

// route.post()
module.exports=route;


