const http = require("http");
const fs = require("fs");
const qs = require("querystring");

let handler = function (req, res) {
  fs.readFile("login.html", function (err, data) {
    res.write(data);
    res.end("");
  });

  if (req.method == "POST") {
    res.writeHead(200, { "content-type": "text/html" });
    let bodyReq = "";
    req.on("data", function (data) {
      bodyReq += data;
    });

    req.on("end", function () {
      let parsedQuery = qs.parse(bodyReq);
      if (
        parsedQuery.Username.length != "" &&
        parsedQuery.Password.length != "" &&
        parsedQuery.Email.length != ""
      ) {
        if (parsedQuery.Password.length >= 8) {
          res.write("Registration sucess.");
        } else {
          res.write(
            "Error password is less than 8 characters."
          );
        }
      } 
      res.end("");
    });
  }
};

const server = http.createServer(handler);
server.listen(8080);

   



