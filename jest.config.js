const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      useESM: true,
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)