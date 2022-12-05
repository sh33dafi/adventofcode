import assert from 'node:assert/strict';
import {findUnionForGroup, findUnionItem, getPriority, solution1, solution2, splitruckSackData} from "./index.js";

const testInput = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw'
]

assert.deepEqual(splitruckSackData('vJrwpWtwJgWrhcsFMMfFFhFp'), [['v', 'J', 'r', 'w', 'p', 'W', 't', 'w', 'J', 'g', 'W', 'r'], ['h', 'c', 's', 'F', 'M', 'M', 'f', 'F', 'F', 'h', 'F', 'p']]);

assert.equal(findUnionItem(['v', 'J', 'r', 'w', 'p', 'W', 't', 'w', 'J', 'g', 'W', 'r'], ['h', 'c', 's', 'F', 'M', 'M', 'f', 'F', 'F', 'h', 'F', 'p']), 'p');
assert.equal(getPriority('a'), 1);
assert.equal(getPriority('z'), 26);
assert.equal(getPriority('A'), 27);
assert.equal(getPriority('Z'), 52);

assert.equal(solution1(testInput), 157);

assert.equal(findUnionForGroup('vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg'), 'r')
assert.equal(findUnionForGroup('wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw'), 'Z')

assert.equal(solution2(testInput), 70);