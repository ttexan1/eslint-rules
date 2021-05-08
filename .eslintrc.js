const rulesDirPlugin = require('eslint-plugin-rulesdir');
rulesDirPlugin.RULES_DIR = 'eslint/rules';

module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['rulesdir'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'comma-dangle': ['error', 'always-multiline'],
    // 0は無効、1は警告、2はエラー
    'rulesdir/no-literal-call': 2,
    'rulesdir/no-double-byte-char': ['warn', 'always'],
  },
};
