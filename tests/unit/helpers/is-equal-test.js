import { isEqual } from 'frontend/helpers/is-equal';
import { module, test } from 'qunit';

module('Unit | Helper | is equal');

test('42, 42', assert => {
  const numbers = isEqual([42, 42]);
  assert.ok(numbers);
});

test('true, true', assert => {
  const isTrue = isEqual([true, true]);
  assert.ok(isTrue);
});

test('false, false', assert => {
  const isFalse = isEqual([false, false]);
  assert.ok(isFalse);
});

test('string, string', assert => {
  const string = isEqual(['string', 'string']);
  assert.ok(string);
});
