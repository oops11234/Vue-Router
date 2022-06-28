module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'no-unused-expressions': 'off',
    'no-plusplus': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'no-useless-return': 'off',
    'no-case-declarations': 'off',
  },
};
