/* eslint-disable no-control-regex */
'use strict';

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'forbid double byte character',
      category: 'Best Practices',
      recommended: false,
      url: 'https://github.com/ttexan1/ttexan-checker',
    },
    schema: [{ enum: ['always', 'japanese'] }],
  },

  create (context) {
    const config = context.options[0] || 'always';
    function report (node, forbiddenType) {
      const message = `Don't use ${forbiddenType} characters`;
      context.report({
        node,
        message,
      });
    }

    function forbidDoubleByteChar (node) {
      const regexp = /[^\x01-\x7E]/;
      if (typeof node.value === 'string' && regexp.test(node.value)) {
        report(node, 'double byte');
      }
    }

    function forbidJapanese (node) {
      const regexp = /[亜-熙ぁ-んァ-ヶ]/;
      if (typeof node.value === 'string' && regexp.test(node.value)) {
        report(node, 'Japanese');
      }
    }

    const predicate = {
      always: forbidDoubleByteChar,
      japanese: forbidJapanese,
    };
    return {
      Literal: predicate[config],
    };
  },
};
