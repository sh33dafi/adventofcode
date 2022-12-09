import {fileToArray} from "../../input-reader.js";
import {sum} from "../../sum.js";

export const splitruckSackData = (ruckSackString) => {
    const ruckSack = ruckSackString.split('');
    const middleIndex = Math.ceil(ruckSack.length / 2);
    return [ruckSack.splice(0, middleIndex), ruckSack.splice(-middleIndex)];
}

export const findUnionItem = (comp1, comp2) => {
    return comp1.filter(i => comp2.includes(i))[0];
}

export const findUnionForGroup = (group1, group2, group3) => {
    return [...new Set(group1.split('').filter(i => group2.includes(i) && group3.includes(i)))][0];
}

export const getPriority = (item) => {
    const charCode = item.charCodeAt(0);
    return charCode >= 97 ? charCode - 96 : charCode - 38;
}

export const solution1 = (ruckSackData) => {
    return ruckSackData
        .map(splitruckSackData)
        .map(ruckSack => findUnionItem(...ruckSack))
        .map(getPriority)
        .reduce(sum, 0)
}

export const solution2 = (ruckSackData) => {
    const common = [];
    for(let i =0; i < ruckSackData.length; i = i + 3 ) {
        common.push(findUnionForGroup(ruckSackData[i], ruckSackData[i+1], ruckSackData[i+2]))
    }
    return common
    .map(getPriority)
    .reduce(sum, 0);
}

export const prepareInput = (input) => {
    return fileToArray(input);
}