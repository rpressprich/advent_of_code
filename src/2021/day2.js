const {day2: data} = require("./common");

//https://adventofcode.com/2021/day/2

const resultOne = data.reduce((acc, input) => {
    const [direction, magnitude] = input.split(" ");
    if (direction === "forward") {
        return {...acc, forward: acc.forward + parseInt(magnitude)}
    }
    if (direction === "down") {
        return {...acc, depth: acc.depth + parseInt(magnitude)}
    }
    if (direction === "up") {
        return {...acc, depth: acc.depth - parseInt(magnitude)}
    }
}, {depth: 0, forward: 0});

const resultTwo = data.reduce((acc, input) => {
    const [direction, magnitude] = input.split(" ");
    if (direction === "forward") {
        return {...acc, forward: acc.forward + parseInt(magnitude), depth: acc.depth + acc.aim * parseInt(magnitude)}
    }
    if (direction === "down") {
        return {...acc, aim: acc.aim + parseInt(magnitude)}
    }
    if (direction === "up") {
        return {...acc, aim: acc.aim - parseInt(magnitude)}
    }
}, {depth: 0, forward: 0, aim: 0});

console.log("part 1: ", resultOne.depth * resultOne.forward);
console.log("part 2: ", resultTwo.depth * resultTwo.forward);
