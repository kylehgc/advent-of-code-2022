import fs from 'fs/promises'
import { stringify } from 'querystring'
const data = await fs.readFile('day6-input.txt', 'utf8')

const removeUpTo = (uniqueLetters: string[], character: string) => {
	const index = uniqueLetters.indexOf(character)
	if (index === -1) {
		return uniqueLetters
	}
	return uniqueLetters.slice(index + 1)
}

const findFirstUniqueAfterXUnique = (data: string, uniqueNeeded: number) => {
	let seen = 0
	let uniqueLetters: string[] = []
	const innerIndex = 0
	for (let character of data) {
		if (!uniqueLetters.includes) {
			uniqueLetters.push(character)
			seen++
		} else {
			uniqueLetters = removeUpTo(uniqueLetters, character)
			uniqueLetters.push(character)
			seen++
		}
		if (uniqueLetters.length === uniqueNeeded) {
			return seen
		}
	}
}

const solvePart1 = (data: string) => {
	console.log(findFirstUniqueAfterXUnique(data, 4))
}

const solvePart2 = (data: string) => {
	console.log(findFirstUniqueAfterXUnique(data, 14))
}

solvePart1(data)
solvePart2(data)
