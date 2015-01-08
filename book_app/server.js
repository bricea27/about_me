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
  }else if (path === "/dracula"){
    fs.readFile("dracula.txt", function (err, data1){
      var text = data1.toString();
      var text1 = text.replace(/\n/g, "<br>");
      fs.readFile("dracula.html", function (err, data){
        var data = data.toString();
        data = data.replace("REPLACE", text1);
        response.end(data);
      });
    });
  }
  else if (path === "/frankenstein"){
    fs.readFile("frankenstein.txt", function (err, data1){
      var text = data1.toString();
      var text1 = text.replace(/\n/g, "<br>");
      fs.readFile("frankenstein.html", function (err, data){
        var data = data.toString();
        data = data.replace("REPLACE", text1);
        response.end(data);
      });
    });
  }
  else if (path === "/treasureisland"){
    fs.readFile("treasureisland.txt", function (err, data1){
      var text = data1.toString();
      var text1 = text.replace(/\n/g, "<br>");
      fs.readFile("treasureisland.html", function (err, data){
        var data = data.toString();
        data = data.replace("REPLACE", text1);
        response.end(data);
      });
    });
  }
  else if (path === "/paradiselost"){
    fs.readFile("paradiselost.txt", function (err, data1){
      var text = data1.toString();
      var text1 = text.replace(/\n/g, "<br>");
      fs.readFile("paradiselost.html", function (err, data){
        var data = data.toString();
        data = data.replace("REPLACE", text1);
        response.end(data);
      });
    });
  }
  else if (path === "/theshining"){
    fs.readFile("theshining.txt", function (err, data1){
      var text = data1.toString();
      var text1 = text.replace(/\n/g, "<br>");
      fs.readFile("theshining.html", function (err, data){
        var data = data.toString();
        data = data.replace("REPLACE", text1);
        response.end(data);
      });
    });
  }else {

    var path = request.url;
    path = path.slice(1);
console.log("path is " + path)
    fs.readFile(path, function(err, data){
      response.end(data);
    });
  }
});
server.listen(2000);
