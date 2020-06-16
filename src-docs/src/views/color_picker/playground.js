import { PropTypes } from 'react-view';
import {
  EuiColorPicker,
  EuiHealth,
  EuiColorStops,
} from '../../../../src/components/';
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

export const colorStopsConfig = () => {
  const docgenInfo = Array.isArray(EuiColorStops.__docgenInfo)
    ? EuiColorStops.__docgenInfo[0]
    : EuiColorStops.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: '(val) => { setColorStops(val) }',
    propHook: {
      what: 'val',
      into: 'colorStops',
    },
  };

  propsToUse.label = {
    ...propsToUse.label,
    type: PropTypes.String,
    value: 'EuiColorStops',
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
  propsToUse.colorStops = {
    ...propsToUse.colorStops,
    type: PropTypes.Array,
    value: `[
      {
        stop: 100,
        color: '#54B399',
      },
      {
        stop: 250,
        color: '#D36086',
      },
      {
        stop: 350,
        color: '#9170B8',
      }
    ]`,
    stateful: true,
  };

  return {
    componentName: 'EuiColorStops',
    props: propsToUse,
    scope: {
      EuiColorStops,
      EuiHealth,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiColorStops', 'EuiHealth'],
      },
    },
  };
};
