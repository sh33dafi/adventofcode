import {sum} from "../../sum.js";
import {fileToArray} from "../../input-reader.js";

const winScore = 6;
const drawScore = 3;
const loseScore = 0;

const wld = {
    'A': {w: 'B', l: 'C'},
    'B': {w: 'C', l: 'A'},
    'C': {w: 'A', l: 'B'},
}

const calcScore = (shape, win, lose) => {
    if (shape === win) return winScore;
    if (shape === lose) return loseScore;
    return drawScore;
}

const score = {
    'A': (shape) => calcScore(shape, wld['A'].w, wld['A'].l),
    'B': (shape) => calcScore(shape, wld['B'].w, wld['B'].l),
    'C': (shape) => calcScore(shape, wld['C'].w, wld['C'].l),
}

const map = (shape) => shape === 'X' ? 'A' : shape === 'Y' ? 'B' : 'C';

const shapeScore = {
    'A': 1,
    'B': 2,
    'C': 3
}


export const calculateRoundScore = (oppenent, me) => {
    return shapeScore[me] + score[oppenent](me);
}

export const solution1 = (strategies) => {
    return strategies
        .map(strategy => strategy.split(' '))
        .map(([opp, me]) => calculateRoundScore(opp, map(me)))
        .reduce(sum, 0)

}

export const solution2 = (strategies) => {
    return strategies
        .map(strategy => strategy.split(' '))
        .map(([opp, WoL]) => {

            let shape = opp;
            if (WoL === 'X') shape = wld[opp].l;
            if (WoL === 'Z') shape = wld[opp].w;
            return [opp, shape];
        }).map(strategy => calculateRoundScore(...strategy))
        .reduce(sum, 0)

}

export const prepareInput = (input) => {
    return fileToArray(input);
}