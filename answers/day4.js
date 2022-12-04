import fs from 'fs/promises';
const data = await fs.readFile('day4-input.txt', 'utf8');
const pairs = data.split('\n');
const doesContain = (pair) => {
    const [elf1, elf2] = pair.split(',');
    const [elf1beginning, elf1end] = elf1.split('-').map(Number);
    const [elf2beginning, elf2end] = elf2.split('-').map(Number);
    if (elf1beginning <= elf2beginning && elf1end >= elf2end) {
        return true;
    }
    if (elf2beginning <= elf1beginning && elf2end >= elf1end) {
        return true;
    }
    return false;
};
const doesOverlap = (pair) => {
    const [elf1, elf2] = pair.split(',');
    const [elf1beginning, elf1end] = elf1.split('-').map(Number);
    const [elf2beginning, elf2end] = elf2.split('-').map(Number);
    console.log(pair);
    if (elf1beginning < elf2beginning && elf1end < elf2beginning) {
        console.log('elf1 is smaller');
        return false;
    }
    if (elf1beginning > elf2end) {
        console.log('elf1 is bigger');
        return false;
    }
    console.log('overlap');
    return true;
};
const solvePart1 = (pairs) => {
    return pairs.reduce((acc, pair) => {
        if (doesContain(pair)) {
            acc++;
        }
        return acc;
    }, 0);
};
const solvePart2 = (pairs) => {
    return pairs.reduce((acc, pair) => {
        if (doesOverlap(pair)) {
            acc++;
        }
        return acc;
    }, 0);
};
console.log(solvePart1(pairs));
console.log(solvePart2(pairs));
