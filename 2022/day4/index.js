import {fileToArray, fileToArrayNoEmptyLines} from "../../input-reader.js";


export const splitAssignment = (assignment) => {
    return assignment.split('-');
}

export const assignmentRangFullContained = (ass1, ass2) => {

    const [A, B] = splitAssignment(ass1).map(x => parseInt(x));
    const [X, Y] = splitAssignment(ass2).map(x => parseInt(x));

    return (A <= X && B >= Y) || (A >= X && B <= Y);

}

export const assignmentRangPariallyContained = (ass1, ass2) => {

    const [A, B] = splitAssignment(ass1).map(x => parseInt(x));
    const [X, Y] = splitAssignment(ass2).map(x => parseInt(x));

    return (A <= Y && B >= X);

}


export const solution1 = (segmentAssignments) => {

    return segmentAssignments
        .map(segmentAssignment => segmentAssignment.split(','))
        .map(segmentAssignment => assignmentRangFullContained(...segmentAssignment))
        .filter(fullRange => fullRange === true)
        .length

}

export const solution2 = (segmentAssignments) => {
    return segmentAssignments
        .map(segmentAssignment => segmentAssignment.split(','))
        .map(segmentAssignment => assignmentRangPariallyContained(...segmentAssignment))
        .filter(fullRange => fullRange === true)
        .length
}

export default (input) => {
    const data = fileToArrayNoEmptyLines(input);
    console.time('solution1');
    console.log(solution1(data));
    console.timeEnd('solution1')
    console.time('solution2');
    console.log(solution2(data));
    console.timeEnd('solution2')
}