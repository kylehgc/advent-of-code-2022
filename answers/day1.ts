import fs from 'fs/promises'

const data = await fs.readFile('day1-input.txt', 'utf-8')
const numbers = data.split('\n').map(Number)

let currentSum = 0
let elves: number[] = []
for (const number of numbers) {
	currentSum += number
	if (number === 0) {
		elves.push(currentSum)
		currentSum = 0
	}
}

elves.sort((a, b) => b - a)
console.log(elves)
const topElf = elves[0]
const top3elves = elves.slice(0, 3).reduce((a, b) => a + b, 0)
console.log(top3elves)
