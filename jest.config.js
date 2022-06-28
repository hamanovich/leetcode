export default {
    bail: false,
    verbose: false,
    collectCoverage: false,
    coverageDirectory: './coverage/',
    testPathIgnorePatterns: ['<rootDir>/node_modules/', "<rootDir>/dist/"],
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(j|t)s$',
    coverageThreshold: {
      global: {
        statements: 95,
        branches: 90,
        functions: 90,
        lines: 95,
      },
    },
  };