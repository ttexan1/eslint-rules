'use strict';

const LITERAL_TYPE = /^(?:Literal|ArrayExpression|ObjectExpression|TemplateLiteral|ClassExpression)$/;

// ルール定義。
module.exports = function (context) {
  return {
    CallExpression: function (node) {
      const callee = node.callee;
      let message;
      if (LITERAL_TYPE.test(callee.type)) {
        message = 'This is not a function.';
      }
      if (callee.type === 'ClassExpression') {
        message = "Class constructors cannot be invoked without 'new'";
      }
      if (message) {
        context.report({ node, message });
      }
    },
  };
};

// ルールのオプション定義。今回は使わない。
module.exports.schema = [];
