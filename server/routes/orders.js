const epxpre=require("express");

const route=epxpre.Router();

route.get("/",(req,res)=>{
    res.send("your all item will be here")
})

route.get("/allitem",(req,res)=>{
    res.send("<ul><li>ghar</li><li>chaval</li><li>ghar</li>aata</ul>")
})
module.exports=route;