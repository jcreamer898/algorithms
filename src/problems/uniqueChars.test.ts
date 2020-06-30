import assert from 'assert';
import { isUniqueChars } from './uniqueChars';

assert.ok(isUniqueChars('abcdef'));
assert.ok(!isUniqueChars('abcadef'));
