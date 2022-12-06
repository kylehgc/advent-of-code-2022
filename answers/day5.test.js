import { moveMany } from './day5';
describe('day5', () => {
    // it('should generate stacks', () => {
    // 	const stacks = generateStacks(lines)
    // 	expect(stacks.length).toBe(10)
    // })
    // it('the first stack should equal MJCBFRLH', () => {
    // 	const stacks = generateStacks(lines)
    // 	expect(stacks[1].join('')).toBe('MJCBFRLH')
    // })
    it('should move many', () => {
        const fakeStack1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const fakeStack2 = ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
        const [newStack1, newStack2] = moveMany(fakeStack1, fakeStack2, 3);
        expect(newStack1.join('')).toBe('abcde');
        expect(newStack2.join('')).toBe('ijklmnopfgh');
    });
});
