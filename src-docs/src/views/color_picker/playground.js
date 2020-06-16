import { PropTypes } from 'react-view';
import { EuiColorPicker, EuiHealth } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const colorPickerConfig = () => {
  const docgenInfo = Array.isArray(EuiColorPicker.__docgenInfo)
    ? EuiColorPicker.__docgenInfo[0]
    : EuiColorPicker.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: '(val) => { setColor(val) }',
    propHook: {
      what: 'val',
      into: 'color',
    },
  };

  propsToUse.color = {
    ...propsToUse.color,
    type: PropTypes.String,
    value: '#D36086',
    stateful: true,
  };
  propsToUse.swatches = {
    ...propsToUse.swatches,
    type: PropTypes.Array,
    value: `[
      '#333',
      '#666',
      '#999',
      '#CCC'
    ]`,
    stateful: true,
  };

  propsToUse.prepend = {
    ...propsToUse.prepend,
    type: PropTypes.ReactNode,
  };
  propsToUse.append = {
    ...propsToUse.append,
    type: PropTypes.ReactNode,
  };
  // propsToUse.descriptionWidth = {
  //   ...propsToUse.descriptionWidth,
  //   type: PropTypes.Number,
  // };

  return {
    componentName: 'EuiColorPicker',
    props: propsToUse,
    scope: {
      EuiColorPicker,
      EuiHealth,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiColorPicker', 'EuiHealth'],
      },
    },
  };
};
