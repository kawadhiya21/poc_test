var assert = require('assert');
var http_controller =  require('../src/http_server');
server = http_controller;
var request = require("supertest").agent(server);


describe("API Tests", function() {
    it("Health Check", function(done){
        request
      .get("/")
      .expect(200, {"status":"success"}, done);
    }
}
