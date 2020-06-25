import { generateParenthesis } from './numParens';
import assert from 'assert';

assert.deepEqual(generateParenthesis(3), [
    '((()))',
    '(()())',
    '(())()',
    '()(())',
    '()()()',
]);

assert.deepEqual(generateParenthesis(2), ['(())', '()()']);
