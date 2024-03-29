module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react/prop-types': 'off',
  },
  overrides: [],
};
