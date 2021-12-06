const {day3: data} = require("./common");

const stringLength = data[0].length;

const positionValues = data.reduce((positionValues, currentString) => {
    const currentArr = currentString.split("");
    for (let i = 0; i < stringLength; i++) {
        positionValues[i] += parseInt(currentArr[i]);
    }
    return positionValues;
}, Array(stringLength).fill(0));
const {gamma, epsilon} = positionValues.reduce(({gamma, epsilon}, positionValue) => {
    if (parseInt(positionValue) > data.length / 2) {
        return {gamma: gamma + "0", epsilon: epsilon + "1"}
    }
    return {gamma: gamma + "1", epsilon: epsilon + "0"}
}, {gamma: "", epsilon: ""});

function findLifeSupportValue(isOxygen, values = data, index = 0) {
    if(values.length === 1 || index === stringLength) {
        return values[0];
    }
    const onesCount = values.reduce((countOfOnes, datum) => datum.charAt(index) === "1" ? countOfOnes + 1 : countOfOnes, 0);
    const mostCommonChar = onesCount >= values.length / 2 ? "1" : "0";

    const filteredValues = values.filter(datum => isOxygen ^ datum.charAt(index) === mostCommonChar);
    return findLifeSupportValue(isOxygen, filteredValues, index + 1)
}
const oxygen = findLifeSupportValue(true);
const carbonDioxide = findLifeSupportValue(false);

console.log("part 1: ", parseInt(gamma, 2) * parseInt(epsilon, 2));
console.log("part 2: ", parseInt(oxygen, 2) * parseInt(carbonDioxide, 2));
