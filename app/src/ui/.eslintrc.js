module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  extends: [
    "../../../.eslintrc.js",
    "plugin:react/recommended", // React rules
    "plugin:react-hooks/recommended", // React hooks rules
    "plugin:jsx-a11y/recommended", // Accessibility rules
    "plugin:react/jsx-runtime", // new JSX runtime for react,
  ],
  plugins: ["react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // General
    // "no-console": "warn",

    // TypeScript
    // We will use TypeScript's types for component props instead
    "react/prop-types": "off",

    // No need to import React when using Next.js
    "react/react-in-jsx-scope": "off",

    // This rule is not compatible with Next.js's <Link /> components
    "jsx-a11y/anchor-is-valid": "off",
  },
};
