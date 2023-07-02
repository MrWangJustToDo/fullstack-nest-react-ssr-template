module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: { __DEVELOPMENT__: true },
  modulePathIgnorePatterns: ["dist", "dev"],
  testMatch: ["<rootDir>/packages/**/*.spec.[jt]s?(x)", "<rootDir>/backend/**/*.spec.[jt]s?(x)"],
  moduleNameMapper: {
    "^lodash-es$": "lodash",
  },
};
