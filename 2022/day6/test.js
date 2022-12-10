import assert from 'node:assert/strict';
import {solution1, solution2} from "./index.js";

const testInput = null;

assert.deepEqual(solution1('mjqjpqmgbljsphdztnvjfqwrcgsmlb'.split('')), 7);
assert.deepEqual(solution1('bvwbjplbgvbhsrlpgdmjqwftvncz'.split('')), 5);
assert.deepEqual(solution1('nppdvjthqldpwncqszvftbrmjlhg'.split('')), 6);
assert.deepEqual(solution1('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'.split('')), 10);
assert.deepEqual(solution1('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'.split('')), 11);
assert.deepEqual(solution2('mjqjpqmgbljsphdztnvjfqwrcgsmlb'.split('')), 19);
assert.deepEqual(solution2('bvwbjplbgvbhsrlpgdmjqwftvncz'.split('')), 23);
assert.deepEqual(solution2('nppdvjthqldpwncqszvftbrmjlhg'.split('')), 23);
assert.deepEqual(solution2('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'.split('')), 29);
assert.deepEqual(solution2('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'.split('')), 26);
