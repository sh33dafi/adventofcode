import { argv } from 'node:process';
import {join, resolve} from 'node:path';

const [app, fill, day] = argv;
const year = '2022';

const solution = await import(`./${year}/${day}/index.js`);

const data = solution.prepareInput(join(resolve(), year, day, 'input.txt'));
console.time('solution1');
console.log(solution.solution1([...data]));
console.timeEnd('solution1')
console.time('solution2');
console.log(solution.solution2(data));
console.timeEnd('solution2')