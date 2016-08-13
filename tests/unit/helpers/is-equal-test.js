import { isEqual } from 'frontend/helpers/is-equal';
import { module, test } from 'qunit';

module('Unit | Helper | is equal');

test('42, 42', assert => {
  const numbers = isEqual([42, 42]);
  assert.equal(numbers, true);
});

test('42, -1', assert => {
  const numbers = isEqual([42, -1]);
  assert.equal(numbers, false);
});

test('true, true', assert => {
  const isTrue = isEqual([true, true]);
  assert.equal(isTrue, true);
});

test('true, false', assert => {
  const isTrue = isEqual([true, false]);
  assert.equal(isTrue, false);
});

test('false, false', assert => {
  const isFalse = isEqual([false, false]);
  assert.equal(isFalse, true);
});

test('a, a', assert => {
  const string = isEqual(['a', 'a']);
  assert.equal(string, true);
});

test('a, b', assert => {
  const string = isEqual(['a', 'b']);
  assert.equal(string, false);
});
