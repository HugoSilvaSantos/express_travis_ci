/**
 * Unit Test Routine
 * 
 */
var request = require('supertest');
var should = require("should");
var app = require('../app');
var server = request.agent(app);

describe('REST API Unit Test', function() {
  it('Test to entry point /', function(done) {
    server
    .get('/')
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });
  it('Test to entry point /home', function(done) {
    server
    .get('/home')
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });
  it("Test non-implemented entry points",function(done){
    server
    .get("/random")
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      done();
    });
  });
});