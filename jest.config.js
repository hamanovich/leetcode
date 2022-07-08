export default {
  bail: false,
  verbose: false,
  collectCoverage: false,
  coverageDirectory: './coverage/',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.ts$',
  coverageReporters: ['json', 'text', 'html', 'lcov'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
