/**
 * To run: mocha
 * 
 */
var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:3000");
// UNIT test begin
describe("SAMPLE unit test",function(){
  // #1 should return home page
  it("should return home page",function(done){
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      // res.body.error.should.equal(false);
      done();
    });
  });

  });
  it("should return REST API Docs",function(done){
    server
    .get("/home")
    .expect("Content-type",/json/)
    .expect(200) // HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      // res.body.error.should.equal(false);
      done();
    });
  });
    it("should return 404",function(done){
    server
    .get("/random")
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      done();
    });
});