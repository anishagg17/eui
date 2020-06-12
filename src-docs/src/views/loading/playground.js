import { PropTypes } from 'react-view';
import {
  EuiLoadingElastic,
  EuiLoadingChart,
  EuiLoadingKibana,
  EuiLoadingSpinner,
  EuiLoadingContent,
} from '../../../../src/components/';

import propUtilityForPlayground from '../../services/playground/props';

export const loadingConfig = () => {
  const docgenInfo = Array.isArray(EuiLoadingElastic.__docgenInfo)
    ? EuiLoadingElastic.__docgenInfo[0]
    : EuiLoadingElastic.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  return {
    componentName: 'EuiLoadingElastic',
    props: propsToUse,
    scope: {
      EuiLoadingElastic,
      EuiLoadingKibana,
      EuiLoadingChart,
      EuiLoadingSpinner,
    },
    imports: {
      '@elastic/eui': {
        named: [
          'EuiLoadingElastic',
          'EuiLoadingKibana',
          'EuiLoadingChart',
          'EuiLoadingSpinner',
        ],
      },
    },
  };
};

export const loadingContentConfig = () => {
  const docgenInfo = Array.isArray(EuiLoadingContent.__docgenInfo)
    ? EuiLoadingContent.__docgenInfo[0]
    : EuiLoadingContent.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.lines = {
    ...propsToUse.lines,
    type: PropTypes.Number,
    value: 3,
  };

  return {
    componentName: 'EuiLoadingContent',
    props: propsToUse,
    scope: {
      EuiLoadingContent,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiLoadingContent'],
      },
    },
  };
};
