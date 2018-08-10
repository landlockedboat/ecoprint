import test from 'ava';
import footprint from '.';

test('title', t => {
	const err = t.throws(() => {
		footprint(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(footprint('unicorns'), 'unicorns & rainbows');
});
