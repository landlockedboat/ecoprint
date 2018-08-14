# ecoprint

> Measure the ecological footprint of various products

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
