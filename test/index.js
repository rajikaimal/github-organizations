const mocha = require('mocha');
const expect = require('chai').expect;
const assert = require('chai').assert;
const ghOrgs = require('../index');

describe('get github organizations', function() {
	it('should return an object', function(done) {
		ghOrgs('sindresorhus', function(error, response) {
			expect(response[0]).to.be.instanceOf(Object);
			assert.property(response[0], 'login');
			done();
		});
	});

	it('should contain property login', function(done) {
		ghOrgs('sindresorhus', function(error, response) {
			assert.property(response[0], 'login');
			done();
		});
	});	
});
