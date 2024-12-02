// Evgeny Nemchenko 
// 48-5
// Introductory exercise 3

const numbers = [0, 1, 2, 0, 3, 0, 4, 0, 5];

let zeroCount = 0;
for (let i = 0; i < numbers.length; i++) {
  zeroCount += (numbers[i] === 0 ? 1 : 0);
}

console.log(`Number of zeros: ${zeroCount}`);



/*
Write a program that defines an array of integers and calculates
the number of zeros using a conditional expression (without using if).
*/