import {default as a} from './a.js';
import {default as b} from './b.js';
import assert from 'node:assert/strict';

const testInput = ['1000',
                   '2000',
                   '3000',
                   '',
                   '4000',
                   '',
                   '5000',
                   '6000',
                   '',
                   '7000',
                   '8000',
                   '9000',
                   '',
                   '10000'];

const result = a(testInput);

assert.equal(result, 24000);
assert.equal(b(testInput), 45000);