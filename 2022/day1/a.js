export const calcCalories = (data) => {
    return data.reduce((acc, value) => {

        if (!value.trim()) {
            acc = [[], ...acc];
        } else {
            acc[0].push(parseInt(value))
        }

        return acc;

    }, [[]])
        .flatMap(v => v.reduce((a, v) => a + v, 0))
}

export default (data) => {
    const calories = calcCalories(data)
    return Math.max(...calories);
};