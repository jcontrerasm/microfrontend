module.exports = {
  setupFiles: [],
  verbose: false,
  roots: ["../../tests"],
  transform: {
    '^.+\\.ts$x': 'ts-jest'
  },
  testMatch: [
    '**/tests/**/*.(test|spec).(js|ts|tsx)'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '^@app/(.*)': '<rootDir>/$1'
  }
}
