// eslint-disable-next-line @typescript-eslint/no-var-requires
const rulesDirPlugin = require('eslint-plugin-rulesdir');
rulesDirPlugin.RULES_DIR = 'eslint/rules';

module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/errors',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: '.',
  },
  plugins: [
    'rulesdir',
    '@typescript-eslint',
    'import',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js'],
      },
    },
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'comma-dangle': ['error', 'always-multiline'],
    // 0は無効、1は警告、2はエラー
    'rulesdir/no-literal-call': 2,
    'rulesdir/no-double-byte-char': ['warn', 'always'],
    'rulesdir/import-sort': 2,

    // 'sort-imports': 0,
    // 'import/order': [2, {

    //   alphabetize: {
    //     order: 'asc',
    //     caseInsensitive: true,
    //   },
    //   groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
    //   'newlines-between': 'always', // ignore|always|always-and-inside-groups|never
    // }],
  },
};
