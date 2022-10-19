module.exports = {
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  root: true,
  rules: {
    'import/order': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
