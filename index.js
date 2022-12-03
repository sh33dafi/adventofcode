import { argv } from 'node:process';
import {join, resolve} from 'node:path';

const [app, fill, day] = argv;
const year = '2022';

const solution = await import(`./${year}/${day}/index.js`);
solution.default(join(resolve(), year, day, 'input.txt'));