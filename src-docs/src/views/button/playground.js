import { PropTypes } from 'react-view';
import { EuiButton } from '../../../../src/components/';
import { propUtilityForPlayground } from '../../services/playground';
import * as t from '@babel/types';

export default () => {
  const docgenInfo = Array.isArray(EuiButton.__docgenInfo)
    ? EuiButton.__docgenInfo[0]
    : EuiButton.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.iconType = {
    ...propsToUse.iconType,
    type: PropTypes.Custom,
    value: undefined,
    custom: {
      ...propsToUse.iconType.custom,
      use: 'switch',
      valWhenOn: 'alert',
    },
  };

  propsToUse.children = {
    value: 'Button',
    type: PropTypes.ReactNode,
    description: 'Visible label.',
    hidden: true,
  };

  const setGhostBackground = {
    color: 'ghost',
  };

  return {
    config: {
      componentName: 'EuiButton',
      props: propsToUse,
      scope: {
        EuiButton,
      },
      imports: {
        '@elastic/eui': {
          named: ['EuiButton'],
        },
      },
      customProps: {
        iconType: {
          generate: value => {
            if (!value) return null;
            return t.stringLiteral(value);
          },
        },
      },
    },
    setGhostBackground,
  };
};
