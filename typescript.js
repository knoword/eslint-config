module.exports = {
  extends: [
    './index.js',
    'plugin:@typescript-eslint/eslint-plugin/recommended'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/indent': 'off'
  }
};
