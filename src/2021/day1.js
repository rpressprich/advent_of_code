const {day1: data} = require("./common");

//https://adventofcode.com/2021/day/1

// For the first challenge, we compare every day with the day 1 before
// For the second challenge, we compare every day with the day 3 before
// const offset = 1;
const offset = 3;

let result = 0
for (let i = offset, dataLength = data.length; i < dataLength; i++) {
    if (data[i - offset] < data[i]) {
        result++;
    }
}

console.log(result);
