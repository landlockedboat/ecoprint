'use strict';

const products = require('./data/products');
const units = require('./data/units');

exports.products = products;
exports.units = units;

function getUnits(productName) {
	const product = products[productName];
	const units = [];

	for (const key in product) {
		if (Object.prototype.hasOwnProperty.call(product, key)) {
			units.push(key);
		}
	}
	return units;
}

function unitCompare(origin, target, unit) {
	const uOrigin = origin[unit];
	const uTarget = target[unit];

	const res =
		{
			difference: uOrigin - uTarget,
			relation: uTarget / uOrigin
		};

	return res;
}

exports.compare = (originName, targetName, units = []) => {
	const uOrigin = getUnits(originName);
	const uTarget = getUnits(targetName);

	let cUnits;

	if (units.length === 0) {
		cUnits = uOrigin.filter(value =>
			uTarget.indexOf(value) !== -1);
	} else {
		cUnits = units;
	}

	const res = [];
	const origin = products[originName];
	const target = products[targetName];

	for (let i = 0; i < cUnits.length; i++) {
		const unit = cUnits[i];
		const comp = unitCompare(origin, target, unit);
		res.push({
			unit,
			comp
		});
	}

	return res;
};
