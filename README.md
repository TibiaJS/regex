#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Collection of Regex to match data of official tibia website


## Install

```sh
$ npm install --save tibia-regex
```


## Usage

```js
var tibia = require('tibia-regex');
console.log(tibia.characters.name);
// returns /.*?Name:.*?td.*?td.*?([A-Za-z\s\'\-]+).+/
```

## Reference
* [renatorib/tibiaregex](https://github.com/renatorib/tibiaregex/)

## License

The MIT License (MIT)

Copyright (c) 2015 TibiaJS

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[npm-url]: https://npmjs.org/package/tibia-regex
[npm-image]: https://badge.fury.io/js/tibia-regex.svg
[travis-url]: https://travis-ci.org/TibiaJS/regex
[travis-image]: https://travis-ci.org/TibiaJS/regex.svg?branch=master
[daviddm-url]: https://david-dm.org/TibiaJS/regex.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/TibiaJS/regex
