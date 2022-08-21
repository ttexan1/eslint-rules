/* eslint-disable rulesdir/no-double-byte-char */
'use strict';
const path = require('path');

const RuleTester = require('eslint').RuleTester;
const rule = require('../rules/import-sort');

const NODE_MODULES = '../../node_modules';
const parsers = {
  BABEL_ESLINT: path.join(__dirname, NODE_MODULES, 'babel-eslint'),
  TYPESCRIPT_ESLINT: path.join(__dirname, NODE_MODULES, 'typescript-eslint-parser'),
  '@TYPESCRIPT_ESLINT': path.join(__dirname, NODE_MODULES, '@typescript-eslint/parser'),
};

const tester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
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
    {
      code: `
      import 'sideeffect';

      import * as React from "react";
      import { Button } from "evergreen-ui";
      import type { Saga } from 'redux-saga';
      `,
      options: [defaultOption],
      parser: parsers.BABEL_ESLINT,
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
    {
      code: `
      import * as BillingTypes from './values/billing-types';
      import * as Actions from './actions';
      import * as AdvertiserAPI from './api/advertisers';
      import * as Budgets from './values/budget';
      import * as CampaignBannerTypes from './values/campaign-banner-types';
      import * as DateTime from './values/datetime';
      import * as HelpersAPI from './api/helpers';
      import * as RemoteResource from './remote-resource';
      import * as Response from './api/response';
      `,
      options: [defaultOption],
      errors: ['Run autofix to sort these imports!'],
      output: `
      import * as Actions from './actions';
      import * as AdvertiserAPI from './api/advertisers';
      import * as BillingTypes from './values/billing-types';
      import * as Budgets from './values/budget';
      import * as CampaignBannerTypes from './values/campaign-banner-types';
      import * as DateTime from './values/datetime';
      import * as HelpersAPI from './api/helpers';
      import * as RemoteResource from './remote-resource';
      import * as Response from './api/response';
      `,
    },
  ],
});
