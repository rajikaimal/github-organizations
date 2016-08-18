# github-organizations

Fetch GitHub organizations of a user

> no authentication required

## Install

```
npm install --save github-organizations
```

## Usage

```js
const ghOrgs = require('github-organizations');

ghOrgs('rajikaimal', function(error, response) {
	if(error) {
		console.log(error);	
	} else {
		console.log(response);
	}
});
```

## API

### ghOrgs(query, callback)

Returns an array of organization data

#### query

Type: `string`

GitHub username for a request

#### callback

Type: `function`

Takes two arguments, error and response respectively

## License

MIT © [Rajika Imal](https://rajikaimal.github.io)