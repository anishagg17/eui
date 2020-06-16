import { PropTypes } from 'react-view';
import { EuiExpression, EuiHealth } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const expressionConfig = () => {
  const docgenInfo = Array.isArray(EuiExpression.__docgenInfo)
    ? EuiExpression.__docgenInfo[0]
    : EuiExpression.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.onClick = {
    ...propsToUse.onClick,
    type: PropTypes.Function,
    value: '() => { console.log("clicked") }',
  };

  propsToUse.value = {
    ...propsToUse.value,
    type: PropTypes.ReactNode,
    value: '<>Value</>',
  };

  propsToUse.description = {
    ...propsToUse.description,
    type: PropTypes.ReactNode,
    value: '<>Is above</>',
  };
  propsToUse.descriptionWidth = {
    ...propsToUse.descriptionWidth,
    type: PropTypes.Number,
  };

  return {
    componentName: 'EuiExpression',
    props: propsToUse,
    scope: {
      EuiExpression,
      EuiHealth,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiExpression', 'EuiHealth'],
      },
    },
  };
};
