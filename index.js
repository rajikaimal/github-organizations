'use strict';

const ghURI = 'https://api.github.com/users/:username/orgs';

const request = require('request');

module.exports = function(username, cb) {
	const URI = ghURI.replace(':username', username);

	const options = {
	  url: URI,
	  headers: {
	    'User-Agent': 'github-organizations'
	  }
	};

	request(options, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    cb(null, JSON.parse(body));
	  } else if(error) {
	  	cb(error, null);
	  }
	});
}