import {calculateRoundScore, solution1, solution2} from './index.js';
import assert from 'node:assert/strict';

const testInput = ['A Y','B X','C Z'];


assert.equal(calculateRoundScore('A', 'B'), 8);
assert.equal(calculateRoundScore('B', 'A'), 1);
assert.equal(calculateRoundScore('C', 'C'), 6);

assert.equal(solution1(testInput), 15);
assert.equal(solution2(testInput), 12);