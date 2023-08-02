module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['unused-imports'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-param-reassign': 0,
    'no-return-await': 0,
    'consistent-return': 0,
    'import/no-cycle': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-undef': 0,
    'unused-imports/no-unused-imports-ts': 2,
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 0,
  },
}
