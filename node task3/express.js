const express = require("express");
const ex = express();

ex.get("/index.html",function(req,res){
    res.send("Hello")
    
})


ex.listen(8080,function(){
    console.log("Server is started");
})