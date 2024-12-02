// Evgeny Nemchenko 
// 48-5
// Introductory exercise 1

const num = 30;

const divBy2 = (num%2 === 0);
const divBy3 = (num%3 === 0);
const divBy5 = (num%5 === 0);
let res = 0;

divBy2 === true || divBy3 === true || divBy5 === true ? res = 1 : null;

divBy2 * divBy3 || divBy3 * divBy5 || divBy2 * divBy5 ? res = 2 : null;

divBy2 * divBy3 * divBy5 ? res=3 : null;

const arrOfNums = [1, 2, 3];

console.log(arrOfNums[res-1]);

/*
Write a program that defines a number (e.g. const num = 123). 
The program checks and prints for the given number:
A. If the number is divisible by 2 or 3 or 5 – print 1 (divisible by only one number).
B. If the number is also divisible by 2 and 3 or 3 and 5 or 2 and 5 – print 2 (divisible by only two numbers).
C. If the number is also divisible by 2 and 3 and 5 – print 3.
Only one output should be printed.
*/