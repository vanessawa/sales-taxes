//Ignore e2e-test when jest-testing
module.exports = {
  testMatch: ["<rootDir>/tests/unit/*.test.js"],
  testPathIgnorePatterns: ["<rootDir>/tests/e2e/"],
};
