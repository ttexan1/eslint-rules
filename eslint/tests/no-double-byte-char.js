/* eslint-disable rulesdir/no-double-byte-char */
'use strict';

const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/no-double-byte-char');

const tester = new RuleTester();

tester.run('no-double-byte-char', rule, {
  valid: [
    { code: 'var a = 1234567890;', options: ['always'] },
    { code: 'var a = "!#$%&\'()=~|^-`@{}[]+*<>?;:,./_";', options: ['always'] },
    { code: 'var f = function() {}; f("abcdefghijklmnopqrstuvwxyz")', options: ['always'] },
    { code: 'var f = function() {}; f("ABCDEFGHIJKLMNOPQRSTUVWXYZ")', options: ['always'] },
  ],
  invalid: [
    { code: '"ひらがな"', options: ['always'], errors: ["Don't use double byte characters"] },
    { code: '"カタカナ"', options: ['always'], errors: ["Don't use double byte characters"] },
    { code: '"漢字"', options: ['always'], errors: ["Don't use double byte characters"] },
    { code: '"¥"', options: ['always'], errors: ["Don't use double byte characters"] },
    { code: '"　"', options: ['always'], errors: ["Don't use double byte characters"] },
    { code: '"０１"', options: ['always'], errors: ["Don't use double byte characters"] },
    { code: 'var a = "宣言"', options: ['always'], errors: ["Don't use double byte characters"] },
    { code: 'var f = function(str) {}; f("ひき数")', options: ['japanese'], errors: ["Don't use Japanese characters"] },
  ],
});
