import {readFile} from "../../input-reader.js";


export const isValidMarker = (marker) => {
    return Object.values(marker.reduce((acc, v) => {
        if (acc[v]) {
            acc[v]++
        } else {
            acc[v] = 1;
        }
        return acc;
        }, {})).every(v => v === 1)
}

export const getMarkerIndex = (datastream, ml = 4) => {
    let markerIndex = null;
    for (let i = 0; i < datastream.length - (ml-1); i++ ) {
        if (isValidMarker(datastream.slice(i, i+ml))) {
            markerIndex = i + ml;
            break;
        }
    }
    return markerIndex;
}

export const solution1 = (datastream) => {
    return getMarkerIndex(datastream, 4);
}

export const solution2 = (datastream) => {
    return getMarkerIndex(datastream, 14);
}

export const prepareInput = (input) => {
    return readFile(input).split('');
}