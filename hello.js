/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
'use strict';

import InputSelect from 'components/form/InputSelect';
import Icon from 'components/Icon';
import IconCrossCurcular from 'components/Icon/icons/IconCrossCurcular';
import { AddIcon, Button } from 'evergreen-ui';
import { TIME_GROUP_LIMIT } from 'hooks/dsp/advertiser/useCreativeCreate';
import naturalCompare from 'natural-compare-lite';
import * as R from 'ramda';
import * as React from 'react';
import css from 'src/css/creativeSelector';
import { useTranslation } from 'src/i18n';
import { OrderCreativeContext } from 'src/pages/advertisers/[advertiserId]/creatives/create';
import { BoxModel, Color } from 'src/theme';
import { OrderCreative } from 'types/dsp';

import CreativeSelectorCreative from './CreativeSelectorCreative';

const a = '＿s';
const foo = 'Hello custom rules!'();
console.log(a, foo);
