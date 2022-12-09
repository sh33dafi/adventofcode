import { argv } from 'node:process';
import {writeFile, mkdir} from 'node:fs';
import {join} from 'node:path';

const writeTemplate = (file, content, day, year = 2022) => {
    const dir = `${year}/${day}/`;
    mkdir(dir, { recursive: true }, (err) => {
        if (err) throw err;
        writeFile(join(dir, file), content, err => {
            if (err) {
                console.error(err);
            }
        });
    });
}

const [app, fill, day] = argv;
const indexJS = `import {fileToArray} from "../../input-reader.js";

export const solution1 = (data) => {
    return null;
}

export const solution2 = (data) => {
    return null;
}

export const prepareInput = (input) => {
    return fileToArray(input);
}`;

const testJS = `import assert from 'node:assert/strict';
import {solution1, solution2} from "./index.js";

const testInput = null;

assert.deepEqual(solution1(testInput), null);
assert.deepEqual(solution2(testInput), null);`;


writeTemplate('index.js', indexJS, day);
writeTemplate('test.js', testJS, day);