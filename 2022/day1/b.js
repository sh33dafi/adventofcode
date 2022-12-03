import {calcCalories} from './a.js';
export default (data) => {
    return calcCalories(data).sort((a,b) => b-a).slice(0,3).reduce((a,v) => a +v, 0);
};