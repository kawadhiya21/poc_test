var assert = require('assert');
var http_controller =  require('../src/http_server');
server = http_controller;
var request = require("supertest")

request = request('https://teststack.bsstag.com');

describe("API Tests", function() {
  it("should give Existing Orders length", function(done) {
      request
    .get("/api/orders?userName=existing_orders_user")
    .expect(200, function(err, res) {
      assert.equal(res.body.orders.length, 5);
      done();
      return;
    })
  });

  it("should test if first item is iphone 12", function(done) {
      request
    .get("/api/orders?userName=existing_orders_user")
    .expect(200, function(err, res) {
      assert.equal(res.body.orders[0]["items"][0]["title"], "iPhone 12");
      done();
      return;
    })
  });

  it("should give Existing products length", function(done) {
      request
    .get("/api/products")
    .expect(200, function(err, res) {
      assert.equal(res.body.products.length, 25);
      done();
      return;
    })
  });
});
