import {fileToArray} from "../../input-reader.js";

export const cleanInput = (treeHeightMap) => {
    return treeHeightMap.slice(1,treeHeightMap.length-1).map(heightMap => heightMap.slice(1, heightMap.length - 1));
}

export const solution1 = (data) => {
    return null;
}

export const solution2 = (data) => {
    return null;
}

export const prepareInput = (input) => {
    return fileToArray(input);
}