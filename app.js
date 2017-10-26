var http = require("http");
http.createServer(function(request,response){
    response.end("HelloWorld...");
    response.end("Hello Nodejs");
}).listen("8181");
console.log("server is running on port 8181, you access it by clicking <a href='http://localhost:8181'>Server Access</a>");
 