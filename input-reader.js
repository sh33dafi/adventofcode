import {readFileSync} from 'node:fs';


export const fileToArrayOfNumbers = (path) => {
    return fileToArrayNoEmptyLines(path).map(v => parseInt(v, 10));
};

export const fileToArray = (path) => {
    const data = readFileSync(path, 'utf8').trim();
    return data.split('\n');
};

export const fileToArrayNoEmptyLines = (path) => {
    return fileToArray(path).filter(v => !!v);
};