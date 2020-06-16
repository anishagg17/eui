import { PropTypes } from 'react-view';
import { EuiRange, EuiDualRange } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const rangeConfig = () => {
  const docgenInfo = Array.isArray(EuiRange.__docgenInfo)
    ? EuiRange.__docgenInfo[0]
    : EuiRange.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: '(e) => { setValue(e.target.value) }',
    propHook: {
      what: 'e.target.value',
      into: 'value',
    },
  };

  propsToUse.levels = {
    ...propsToUse.levels,
    type: PropTypes.Array,
    value: `[
      {min: 0, max: 20, color: 'danger'},
      {min: 20, max: 100, color: 'success'}
    ]`,
    stateful: true,
  };

  propsToUse.ticks = {
    ...propsToUse.ticks,
    type: PropTypes.Array,
    value: `[
      { label: '20kb', value: 20 },
      { label: '100kb', value: 100 }
    ]`,
    stateful: true,
  };

  propsToUse.showInput = {
    ...propsToUse.showInput,
    type: PropTypes.Boolean,
  };
  propsToUse.value = {
    ...propsToUse.value,
    stateful: true,
    type: PropTypes.String,
  };

  return {
    componentName: 'EuiRange',
    props: propsToUse,
    scope: {
      EuiRange,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiRange'],
      },
    },
  };
};

export const dualRangeConfig = () => {
  const docgenInfo = Array.isArray(EuiDualRange.__docgenInfo)
    ? EuiDualRange.__docgenInfo[0]
    : EuiDualRange.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: '(e) => { setValue(e) }',
    propHook: {
      what: 'e',
      into: 'value',
    },
  };

  propsToUse.levels = {
    ...propsToUse.levels,
    type: PropTypes.Array,
    value: `[
      {min: 0, max: 20, color: 'danger'},
      {min: 20, max: 100, color: 'success'}
    ]`,
    stateful: true,
  };

  propsToUse.ticks = {
    ...propsToUse.ticks,
    type: PropTypes.Array,
    value: `[
      { label: '20kb', value: 20 },
      { label: '100kb', value: 100 }
    ]`,
    stateful: true,
  };

  propsToUse.append = {
    ...propsToUse.append,
    type: PropTypes.ReactNode,
  };
  propsToUse.prepend = {
    ...propsToUse.prepend,
    type: PropTypes.ReactNode,
  };
  propsToUse.showInput = {
    ...propsToUse.showInput,
    type: PropTypes.Boolean,
  };
  propsToUse.value = {
    ...propsToUse.value,
    stateful: true,
    type: PropTypes.String,
  };

  return {
    componentName: 'EuiDualRange',
    props: propsToUse,
    scope: {
      EuiDualRange,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiDualRange'],
      },
    },
  };
};
