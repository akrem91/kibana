/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { IndexPatternCreationRegistry } from 'ui/management/index_pattern_creation';
import { RollupIndexPatternConfig } from './rollup_index_pattern_config';

IndexPatternCreationRegistry.register(() => RollupIndexPatternConfig);