/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
'use strict';

import 'sideeffect';

import * as R from 'ramda';
import * as React from 'react';
import naturalCompare from 'natural-compare-lite';
import { AddIcon, Button } from 'evergreen-ui';
import { OrderCreative } from 'types/dsp';
import { TIME_GROUP_LIMIT } from 'hooks/dsp/advertiser/useCreativeCreate';

import CreativeSelectorCreative from './CreativeSelectorCreative';
import Icon from 'components/Icon';
import IconCrossCurcular from 'components/Icon/icons/IconCrossCurcular';
import InputSelect from 'components/form/InputSelect';
import css from 'src/css/creativeSelector';
import { BoxModel, Color } from 'src/theme';
import { OrderCreativeContext } from 'src/pages/advertisers/[advertiserId]/creatives/create';
import { useTranslation } from 'src/i18n';

const a = '＿s';
const foo = 'Hello custom rules!'();
console.log(a, foo);
