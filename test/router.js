var express = require('express');
var app = require('../app');
var request = require('supertest');
var should = require('should');

describe('router testing', function() {
    it('"whoami" contains ip language os', function(done) {
        request(app)
            .get('/api/whoami')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                should.exists(res.text);
                should.equal(JSON.parse(res.text).ipaddress, '::ffff:127.0.0.1');
                should.equal(JSON.parse(res.text).language, undefined);
                should.equal(JSON.parse(res.text).software, 'node-superagent/2.3.0');
                done();
            });
    });
});