import { PropTypes } from 'react-view';
import { EuiSuggest } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const suggestConfig = () => {
  const docgenInfo = Array.isArray(EuiSuggest.__docgenInfo)
    ? EuiSuggest.__docgenInfo[0]
    : EuiSuggest.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.suggestions = {
    ...propsToUse.suggestions,
    type: PropTypes.Array,
    value: `[{
      type: { iconType: 'kqlField', color: 'tint4' },
      label: 'Field sample',
      description: 'This is the description',
    },
    {
      type: { iconType: 'kqlValue', color: 'tint0' },
      label: 'Value sample',
      description: 'This is the description',
    },
    {
      type: { iconType: 'kqlSelector', color: 'tint2' },
      label: 'Conjunction sample',
      description: 'This is the description',
    },
    {
      type: { iconType: 'kqlOperand', color: 'tint1' },
      label: 'Operator sample',
      description: 'This is the description',
    }]`,
    hidden: true,
    stateful: true,
  };
  propsToUse.append = {
    ...propsToUse.append,
    type: PropTypes.ReactNode,
  };

  propsToUse.onItemClick = {
    ...propsToUse.onItemClick,
    type: PropTypes.Function,
    value: '(item) => { console.log(item) }',
  };
  propsToUse.onInputChange = {
    ...propsToUse.onInputChange,
    type: PropTypes.Function,
    value: '() => { }',
  };

  return {
    componentName: 'EuiSuggest',
    props: propsToUse,
    scope: {
      EuiSuggest,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiSuggest'],
      },
    },
  };
};
