module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: { __DEVELOPMENT__: true },
  modulePathIgnorePatterns: ["dist", "dev"],
  testMatch: ["<rootDir>/packages/**/*.spec.[jt]s?(x)", "<rootDir>/app/**/*.spec.[jt]s?(x)"],
  moduleNameMapper: {
    "^lodash-es$": "lodash",
  },
};
