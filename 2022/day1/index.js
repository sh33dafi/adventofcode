export  {default as solution1} from './a.js';
export  {default as solution2} from './b.js';
import {fileToArray} from '../../input-reader.js';


export const prepareInput = (input) => {
    return fileToArray(input);
}