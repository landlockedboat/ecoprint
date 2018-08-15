# ecoprint

> Measure the ecological footprint of various products

[![Build Status](https://travis-ci.org/vikepic/ecoprint.svg?branch=master)](https://travis-ci.org/vikepic/ecoprint) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

## Install

```
$ npm install ecoprint
```

## Usage

```js
const ecoprint = require('ecoprint');

ecoprint['lamb'];
//=> { co2: 39.2, water: 8763 }

ecoprint.compare('tofu', 'tuna');
//=> [ { unit: 'co2', comp: { difference: -4.1, relation: 3.05 } } ]

ecoprint.units['water'];
//=> 'liters'
```

## API

### ecoprint.products

Get an array of all products and their ecological ecoprint.

### ecoprint.units

Get an array of all magnitudes to compare and their corresponding units.

### ecoprint.compare(origin, target)

#### origin

Type: `string`

Origin product name to compare with `target`.

#### target

Type: `string`

Target product name to compare with `origin`.

## License

MIT © [vikepic](https://vikepic.github.io)
