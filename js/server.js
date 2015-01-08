var http = require("http");
var fs = require("fs");
var msg = "";

var server = http.createServer(function(request, response){
  console.log(request.url);
  var path = request.url;
  var tree = path.split("/");
  if (path === "/"){
    fs.readFile("index.html", function (err, data){
      var data = data.toString();
      response.end(data);
    });
  }
  else if (path === "/chat_app/index.html"){
    fs.readFile("index.html", function (err, data){
      var data = data.toString();
      response.end(data);
    });
  }
  else if (path === "/book_app/index.html"){
    fs.readFile("index.html", function (err, data){
      var data = data.toString();
      response.end(data);
    });
  }
  else if (path === "/calc/index.html"){
    fs.readFile("index.html", function (err, data){
      var data = data.toString();
      response.end(data);
    });
  }
  else {

    var path = request.url;
    path = path.slice(1);
    console.log("path is " + path)
    fs.readFile(path, function(err, data){
      response.end(data);
    });
  }
});
server.listen(2000);
