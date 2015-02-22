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

MIT © [Gabriel Pedro](https://gpedro.net)


[npm-url]: https://npmjs.org/package/tibia-regex
[npm-image]: https://badge.fury.io/js/tibia-regex.svg
[travis-url]: https://travis-ci.org/TibiaJS/tibia-regex
[travis-image]: https://travis-ci.org/TibiaJS/tibia-regex.svg?branch=master
[daviddm-url]: https://david-dm.org/TibiaJS/tibia-regex.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/TibiaJS/tibia-regex
