# footprint

> Measure the ecological footprint of various products

## Install

```
$ npm install footprint
```

## Usage

```js
const footprint = require('footprint');

footprint['lamb'];
//=> { co2: 39.2, water: 8763 }

footprint.compare('tofu', 'tuna');
//=> [ { unit: 'co2', comp: { difference: -4.1, relation: 3.05 } } ]

footprint.units['water'];
//=> 'liters'
```

## API

### footprint.products

Get an array of all products and their ecological footprint.

### footprint.units

Get an array of all magnitudes to compare and their corresponding units.

### footprint.compare(origin, target)

#### origin

Type: `string`

Origin product name to compare with `target`.

#### target

Type: `string`

Target product name to compare with `origin`.

## License

MIT © [vikepic](https://vikepic.github.io)
