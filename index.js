'use strict';

const products = require("./data/products");
const units = require("./data/units");

exports.products = products;
exports.units = units;

function getUnits(productName)
{
	var product = products[productName];
	var units = [];

	for (var key in product)
	{
		units.push(key);
	}
	return units;
}

function unitCompare(origin, target, unit)
{
	var uOrigin = origin[unit];
	var uTarget = target[unit];

	var res = 
		{
			"difference" : uOrigin - uTarget,
			"relation" : uTarget / uOrigin
		}

	return res;
}


function footprintCompare(originName, targetName, units = [])
{
	var uOrigin = getUnits(originName);
	var uTarget = getUnits(targetName);

	var cUnits;

	if(units.length == 0)
	{
		cUnits = uOrigin.filter(value =>
			uTarget.indexOf(value) !== -1);
	}
	else
	{
		cUnits = units;
	}

	var res = [];
	var origin = products[originName];
	var target = products[targetName];

	for(var unitKey in cUnits)
	{
		var unit = cUnits[unitKey];
		var comp = unitCompare(origin, target, unit);
		res.push({
			unit,
			comp
		});
	}
	return res;
}

exports.compare = footprintCompare;
