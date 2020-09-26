module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['**/__tests__/*.(test|spec).(ts|jsx|js)'],
  transformIgnorePatterns: ['node_modules'],
  testEnvironment: 'node',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['./src/setupTests.js'],
  transform: {
    '\\.js$': 'babel-jest',
  },
}
