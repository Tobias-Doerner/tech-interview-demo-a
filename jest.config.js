module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.vue',
    '<rootDir>/src/views/**/*.vue'
  ],
  preset: '@vue/cli-plugin-unit-jest'
}
