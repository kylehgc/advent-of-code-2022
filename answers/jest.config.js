/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			useESM: true,
		},
	},
	preset: 'ts-jest/presets/default-esm',
	moduleNameMapper: {
		'^react-dnd$': 'react-dnd/dist/cjs',
		'^react-dnd-html5-backend$': 'react-dnd-html5-backend/dist/cjs',
		'^dnd-core$': 'dnd-core/dist/cjs',
	},
}
