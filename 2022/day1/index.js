import  {default as a} from './a.js';
import {default as b} from './b.js';
import {fileToArray} from '../../input-reader.js';

export default (input) => {
    const data = fileToArray(input);
    console.time('solution1');
    console.log(a(data));
    console.timeEnd('solution1')
    console.time('solution2');
    console.log(b(data));
    console.timeEnd('solution2')
}