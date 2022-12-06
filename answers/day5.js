import fs from 'fs/promises';
const data = await fs.readFile('day5-input.txt', 'utf8');
export const lines = data.split('\n');
export const generateStacks = (lines) => {
    let lineIndex = 0;
    const stacks = [];
    while (lines[lineIndex]) {
        for (let [index, character] of lines[lineIndex].split('').entries()) {
            if (isALetter(character)) {
                if (!stacks[index]) {
                    stacks[index] = [];
                }
                stacks[index].unshift(character);
            }
        }
        lineIndex++;
    }
    const filteredStacks = stacks.filter((array) => array);
    filteredStacks.unshift([]);
    return filteredStacks;
};
const isALetter = (character) => {
    return character.toLowerCase() !== character.toUpperCase();
};
const getInstruction = (line) => {
    const instructions = line
        .split('')
        .filter((character) => {
        if (character !== ' ') {
            return !isNaN(Number(character));
        }
    })
        .map(Number);
    if (instructions.length === 4) {
        return [
            instructions[0] * 10 + instructions[1],
            instructions[2],
            instructions[3],
        ];
    }
    return instructions;
};
const moveOne = (fromStack, toStack) => {
    const character = fromStack.pop();
    toStack.push(character || '');
};
const doInstructionPartOne = (stacks, instruction) => {
    const [iterations, from, to] = instruction;
    const fromStack = stacks[from];
    const toStack = stacks[to];
    for (let i = 0; i < iterations; i++) {
        moveOne(fromStack, toStack);
    }
};
const generateInstructions = (lines) => {
    return lines.filter((line) => line[0] === 'm').map(getInstruction);
};
export const moveMany = (fromStack, toStack, iterations) => {
    const boxesToMove = fromStack.slice(fromStack.length - iterations);
    fromStack = [...fromStack.slice(0, fromStack.length - iterations)];
    toStack = [...toStack, ...boxesToMove];
    return [fromStack, toStack];
};
const solvePart1 = (lines) => {
    const stacks = generateStacks(lines);
    const instructions = generateInstructions(lines);
    instructions.forEach((instruction) => {
        doInstructionPartOne(stacks, instruction);
    });
    const answer = stacks.map((stack) => stack[stack.length - 1]).join('');
    console.log(answer);
};
const solvePart2 = (lines) => {
    const stacks = generateStacks(lines);
    const instructions = generateInstructions(lines);
    instructions.forEach((instruction) => {
        const [fromStack, toStack] = moveMany(stacks[instruction[1]], stacks[instruction[2]], instruction[0]);
        stacks[instruction[1]] = fromStack;
        stacks[instruction[2]] = toStack;
    });
    const answer = stacks.map((stack) => stack[stack.length - 1]).join('');
    console.log(answer);
};
solvePart2(lines);
export default {};
