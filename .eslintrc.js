module.exports = {
  extends: ['origami-component', 'plugin:prettier/recommended'],
  "env": {
    "browser": true,
    "mocha": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2017
  },
  "globals": {
    "expect": true
  },
  rules: {
    'guard-for-in': 0
  }
}

