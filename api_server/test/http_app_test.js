var assert = require('assert');
var http_controller =  require('../src/http_server');
server = http_controller;
var request = require("supertest").agent(server);


describe("API Tests", function() {
    it("Health Check", function(done){
        request
      .get("/")
      .expect(200, {"status":"success"}, done);
    });
    it("Page Does Not Exist", function(done){
        request
      .get("/page_does_not_exist")
      .expect(200, {"status":"bad_request", "response": "page does not exist"}, done);
    });

    it("Success Endpoint Should return 200", function(done){
        request
      .get("/success")
      .expect(200, {"status":"success"}, done);
    });

    it("echo", function(done){
        request
      .get("/echo?value=hello")
      .expect(200, {"status":"success", "message": "You passed hello"}, done);
    });

    it("Login Should return 200", function(done){
        request
      .get("/login")
      .expect(200, {"message":"successfully logged in"}, done);
    });

    it("Server Should return 500", function(done){
        request
      .get("/server_error")
      .expect(500, {"status":"error", "message":"some exception occureed"}, done);
    });

    after(function () {
        server.close();
    });
});
