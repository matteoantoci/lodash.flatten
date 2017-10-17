import test from 'tape';
import { flatten, unflatten } from './index';

test('it works with arrays', (t) => {
  t.plan(1);

  const expected = [1, [2, [3, 4], 5], 6];

  const actual = unflatten(flatten(expected));

  t.deepEqual(actual, expected);
});

test('it works with objects', (t) => {
  t.plan(1);

  const expected = { foo: { bar: false } };

  const actual = unflatten(flatten(expected));

  t.deepEqual(actual, expected);
});

test('it works with a mix of arrays and objects', (t) => {
  t.plan(1);

  const expected = { a: [{ b: ['c', 'd'] }] };

  const actual = unflatten(flatten(expected));

  t.deepEqual(actual, expected);
});