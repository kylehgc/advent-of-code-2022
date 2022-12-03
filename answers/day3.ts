import fs from 'fs/promises'
const data = await fs.readFile('day3-input.txt', 'utf8')
const rucksacks = data.split('\n')

const calculatePrirorityValue = (item: string) => {
	if (item[0].toUpperCase() === item[0]) {
		return item.charCodeAt(0) - 64 + 26
	}
	return item.charCodeAt(0) - 96
}

const getRuckSackDuplicates = (rucksack: string) => {
	const duplicateItems: { [key: string]: number } = {}
	const sackOne = rucksack.slice(0, rucksack.length / 2)
	const sackTwo = rucksack.slice(rucksack.length / 2)
	for (const item of sackOne) {
		if (sackTwo.includes(item)) {
			if (duplicateItems[item]) {
				duplicateItems[item]++
			} else {
				duplicateItems[item] = 1
			}
		}
	}
	return duplicateItems
}

const solvepart1 = (rucksacks: string[]) => {
	let total = 0
	for (const sack of rucksacks) {
		const duplicates = getRuckSackDuplicates(sack)
		Object.keys(duplicates).forEach((key) => {
			total += calculatePrirorityValue(key)
		})
	}
	return total
}

const getDuplicates = (sackOne: string, sackTwo: string) => {
	const duplicateItems: string[] = []
	for (const item of sackOne) {
		if (sackTwo.includes(item)) {
			duplicateItems.push(item)
		}
	}
	return [...new Set(duplicateItems)]
}

const getRuckSackGroupsOf3 = (rucksacks: string[]) => {
	const groups: string[][] = []
	for (let i = 0; i < rucksacks.length; i += 3) {
		groups.push([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]])
	}
	return groups
}

const rucksacksGroupsOf3 = getRuckSackGroupsOf3(rucksacks)
const solvePart2 = (rucksacksGroupsOf3: string[][]) => {
	let total = 0
	for (const rucksackGroup of rucksacksGroupsOf3) {
		const sackOne = rucksackGroup[0]
		const sackTwo = rucksackGroup[1]
		const sackThree = rucksackGroup[2]
		const duplicatesFirstTwoSacks = getDuplicates(sackOne, sackTwo)
		const duplicates = getDuplicates(
			duplicatesFirstTwoSacks.join(''),
			sackThree,
		)
		for (const duplicate of duplicates) {
			total += calculatePrirorityValue(duplicate)
		}
	}
	return total
}
console.log(solvepart1(rucksacks))
console.log(solvePart2(rucksacksGroupsOf3))
