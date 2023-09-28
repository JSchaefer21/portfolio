module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react"],
  extends: ["plugin:react/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  overrides: [],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/propt-types": "off",
    "react/no-unescaped-entities": "off",
  },
}
