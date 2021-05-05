module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'react/jsx-pascal-case': 'off',
    'import/order': 'off',
    'babel/camelcase': 'off',
    'jsx-a11y/label-has-for': 'off',
    'max-lines-per-function': 'off',
    'babel/quotes': 'off',
    'consistent-return': 'off',
    'react/display-name': 'off',
  },
};
