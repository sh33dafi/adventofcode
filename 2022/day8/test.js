import assert from 'node:assert/strict';
import {cleanInput, solution1, solution2} from "./index.js";


const testInput = [[3,0,3,7,3],[2,5,5,1,2],[6,5,3,3,2],[3,3,5,4,9],[3,5,3,9,0]];

assert.deepEqual(cleanInput(testInput), [ [ 5, 5, 1 ], [ 5, 3, 3 ], [ 3, 5, 4 ] ]);

assert.deepEqual(solution1(testInput), null);
assert.deepEqual(solution2(testInput), null);