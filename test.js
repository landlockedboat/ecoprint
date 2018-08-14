import test from 'ava';
import ecoprint from '.';

test('Beef co2 correct', t => {
	t.is(ecoprint.products.beef.co2, 27);
});

test('Teapot does not exist', t => {
	t.falsy(ecoprint.products.teapot);
});

test('Tofu and beef comparison correct', t => {
	t.is(ecoprint.compare('beef', 'tofu')[0]
		.comp.difference, 25);
});
