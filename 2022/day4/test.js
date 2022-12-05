import assert from 'node:assert/strict';
import {assignmentRangFullContained, assignmentRangPariallyContained, solution1, solution2} from "./index.js";

const testInput = [
    '2-4,6-8',
    '2-3,4-5',
    '5-7,7-9',
    '2-8,3-7',
    '6-6,4-6',
    '2-6,4-8'
]



assert.equal(assignmentRangFullContained('2-4','6-8'), false);
assert.equal(assignmentRangFullContained('2-3','4-5'), false);
assert.equal(assignmentRangFullContained('5-7','7-9'), false);
assert.equal(assignmentRangFullContained('2-8','3-7'), true);
assert.equal(assignmentRangFullContained('6-6','4-6'), true);
assert.equal(assignmentRangFullContained('2-6','4-8'), false);

assert.equal(assignmentRangPariallyContained('2-4','6-8'), false);
assert.equal(assignmentRangPariallyContained('2-3','4-5'), false);
assert.equal(assignmentRangPariallyContained('5-7','7-9'), true);
assert.equal(assignmentRangPariallyContained('2-8','3-7'), true);
assert.equal(assignmentRangPariallyContained('6-6','4-6'), true);
assert.equal(assignmentRangPariallyContained('2-6','4-8'), true);

assert.equal(solution1(testInput), 2);
assert.equal(solution2(testInput), 4);