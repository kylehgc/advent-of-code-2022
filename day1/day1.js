import fs from 'fs/promises';
const data = await fs.readFile('day1-input.txt', 'utf-8');
const numbers = data.split('\n').map(Number);
console.log(numbers);
let highest = 0;
let currentSum = 0;
let elves = [];
for (const number of numbers) {
    currentSum += number;
    if (number === 0) {
        elves.push(currentSum);
        currentSum = 0;
    }
}
elves.sort((a, b) => b - a);
console.log(elves);
const top3elves = elves.slice(0, 3).reduce((a, b) => a + b, 0);
console.log(top3elves);
