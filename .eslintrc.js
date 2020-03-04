module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'semi': [2, 'always'],
    'spaced-comment': 'off',
    'quote-props': 'off',
    'no-undef': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/first': 'off',
    'node/no-deprecated-api': 'off'
  }
}
