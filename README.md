# express-pager

Pagination For Use With Nodejs Express/Pug.

## Getting Started
Install the module with: `npm install express-pager`

The Express-Pager plugin returns a function that accepts an options object.
Call this to get access to the module functionality itself. As Such:

```javascript
var pager = require('express-pager')({
	// options...
});
```

### Usage

```javascript
var pager = require('pager-expressjs')();
var data = new Array(95);

var PER_PAGE = 10;
var currentPage = 6;

var paging = pager.page(data.length, PER_PAGE, currentPage);
var html = paging.render({ baseUrl: '/example', query: "?type=1" });
```


### Usage (with custom HTML classes)

```javascript
var options = {
template: {
	ul: 'pagination', //ul class
	li: 'page-item', //li class
	a: 'page-link', //a class
	next: 'next', //next class
	previous: 'previous' //previous class 
}
}
var pager = require('express-pager')(options);
var data = new Array(95);

var PER_PAGE = 10;
var currentPage = 6;

var paging = pager.page(data.length, PER_PAGE, currentPage);
var html = paging.render({ baseUrl: '/example', query: "?type=1" });
```

## License
Copyright (c) 2022 Ayomide Oloyede
Licensed under the MIT license.
