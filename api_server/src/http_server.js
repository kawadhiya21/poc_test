var express = require('express');
var net = require('net');
var url = require('url');


var app = express();

app.use(express.json());

app.use(function (error, req, res, next) {
});


app.get('/', function(req, res){
  res.status(200).json({"status": "success"});
});

app.get("/page_does_not_exist", function(request, response){
    response.status(404).json({"status":"bad_request", "response": "page does not exist"});
});

app.get("/success", function(request, response){
    response.status(200).json({"status":"success"});
});
app.get("/echo", function(request, response){
    var param = request.query["value"]
    response.status(200).json({"status":"success", "message":"You passed "+param});
});

app.get("/login", function(request, response){
    response.status(200).json({"message":"successfully logged in"});
});
app.get("/server_error", function(request, response){
    response.status(500).json({"status":"error", "message":"some exception occureed"});
});


app = app.listen(8000);
exports = module.exports = app;