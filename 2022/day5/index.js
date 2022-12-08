import {fileToArrayTrimEnd} from "../../input-reader.js";

export const parseProdcedures = (procedures) => procedures.map(procedure => {
    let re = /move (?<move>\w+) from (?<from>\w+) to (?<to>\w+)/;
    const groups = procedure.match(re).groups

    return {
        move: parseInt(groups.move),
        from: parseInt(groups.from),
        to: parseInt(groups.to)
    };

})

export const parseStacks = (stacks) => {
    const [indexLine, ...containerStacks] = stacks.reverse();
    const transFormedStacks = indexLine.match(/(\d)/g)
        .map(v => parseInt(v))
        .reduce((acc, v) => {
            acc[v] = [];
            return acc;
        }, {})

    const regexp = /\[(\S)\]/g;
    containerStacks.forEach(containerStack => {

        let matches = [...containerStack.matchAll(regexp)];
        matches.forEach(match => {
            const stackIndex = (match.index / 4) + 1;
            const container = match[1]
            transFormedStacks[stackIndex] = [container, ...transFormedStacks[stackIndex]];
        })

    })

    return transFormedStacks;

}

export const parseRearrangementData = (rearrangementData) => {
    const splitIndex = rearrangementData.findIndex(value => value.trim() === '');
    const stacks = rearrangementData.splice(0, splitIndex);
    const procedures = rearrangementData.slice(1);
    return {
        stacks: parseStacks(stacks),
        procedures: parseProdcedures(procedures)
    }
}

export const getTopCrates = (stacks) => {
    return Object.keys(stacks).reduce((acc, key) => {
        return [...acc, stacks[key].shift()]
    }, []).join('');
}

export const rearrangeStacks= (stacks, procedures, multiPick = false) => {
    procedures.forEach(procedure => {
        let containersToMove = stacks[procedure.from].splice(0, procedure.move);
        if (!multiPick) {
            containersToMove.reverse();
        }
        stacks[procedure.to] = [...containersToMove, ...stacks[procedure.to]];
    });

    return stacks;
}

export const solution1 = (rearrangementData) => {
    const {stacks, procedures} = parseRearrangementData(rearrangementData);
    const rearrangedStacks = rearrangeStacks(stacks, procedures);
    return getTopCrates(rearrangedStacks);

}

export const solution2 = (rearrangementData) => {
    const {stacks, procedures} = parseRearrangementData(rearrangementData);
    const rearrangedStacks = rearrangeStacks(stacks, procedures, true);
    return getTopCrates(rearrangedStacks);
}

export default (input) => {
    const data = fileToArrayTrimEnd(input);
    console.time('solution1');
    console.log(solution1([...data]));
    console.timeEnd('solution1')
    console.time('solution2');
    console.log(solution2(data));
    console.timeEnd('solution2')
}