import test from 'ava';
import footprint from '.';

test('Beef co2 correct', t => {
	t.is(footprint.products.beef.co2, 27);
});

test('Teapot does not exist', t => {
	t.falsy(footprint.products.teapot);
});

test('Tofu and beef comparison correct', t => {
	t.is(footprint.compare('beef', 'tofu')[0]
		.comp.difference, 25);
});
