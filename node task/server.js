const http = require("http");
const fs = require("fs");

var handeler=function (req, res) {

if(req.url=="/index.html"){
    
    fs.readFile("index.html",function (err,data){
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}
if (req.url=="/home.html"){
    fs.readFile("home.html",function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })

    }
}



 
  const server=http.createServer(handeler);
  server.listen(8080);
  
  
  
