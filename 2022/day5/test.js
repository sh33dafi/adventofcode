import assert from 'node:assert/strict';
import {parseRearrangementData, solution1, solution2} from "./index.js";

const testInput = [
    '    [D]',
    '[N] [C]',
    '[Z] [M] [P]',
    ' 1   2   3',
    '',
    'move 1 from 2 to 1',
    'move 3 from 1 to 3',
    'move 2 from 2 to 1',
    'move 1 from 1 to 2'
]

assert.deepEqual(parseRearrangementData([...testInput]), {
    stacks: {
        1: ['N', 'Z'],
        2: ['D','C','M'],
        3: ['P']
        },
    procedures: [
        {move: 1, from: 2, to: 1},
        {move: 3, from: 1, to: 3},
        {move: 2, from: 2, to: 1},
        {move: 1, from: 1, to: 2}
    ]
});

assert.deepEqual(solution1([...testInput]), 'CMZ');
assert.deepEqual(solution2([...testInput]), 'MCD');