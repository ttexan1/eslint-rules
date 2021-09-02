/* eslint-disable rulesdir/no-double-byte-char */
'use strict';

const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/import-sort');

const tester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
  },
});

const defaultOption = {
  groups: [
    // Side effect imports.
    ['^\\u0000'],
    // Packages.
    // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
    ['^(?=@?\\w)(?!(components|src))'],
    // Absolute imports and other imports such as Vue-style `@/foo`.
    // Anything not matched in another group.
    ['^'],
    // Relative imports.
    // Anything that starts with a dot.
    ['^(components|src|\\.)'],
  ],
};

tester.run('import-sort', rule, {
  valid: [
    {
      code: `
      import 'sideeffect';

      import * as React from "react";
      import { Button } from "evergreen-ui";

      import AB from "./ab";
      import CD from "./cd";
      import NewComponent from "components/new";
      import NewSrc from "src/new";
      import ab, { xy } from "../ab";
      import cd from "../cd";
      import { xy as Abc } from "./c";
      import { Button2 } from "src/forms/button";
      `,
      options: [defaultOption],
    },
  ],
  invalid: [
    {
      code: `
      import ab from "ab";
      import a from "b";
      `,
      options: [defaultOption],
      errors: ['Run autofix to sort these imports!'],
      output: `
      import a from "b";
      import ab from "ab";
      `,
    },
  ],
});
