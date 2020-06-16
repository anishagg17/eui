import { PropTypes } from 'react-view';
import { EuiSuperDatePicker } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const superDatePickerConfig = () => {
  const docgenInfo = Array.isArray(EuiSuperDatePicker.__docgenInfo)
    ? EuiSuperDatePicker.__docgenInfo[0]
    : EuiSuperDatePicker.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.onTimeChange = {
    ...propsToUse.onTimeChange,
    type: PropTypes.Function,
    value: '({ start, end }) => { setStart(start);     setEnd(end);    }',
    // propHook: {
    //   what: 'start',
    //   into: 'start',
    // },
  };
  propsToUse.onRefreshChange = {
    ...propsToUse.onRefreshChange,
    type: PropTypes.Function,
    value:
      '({ isPaused, refreshInterval }) => {     setRefreshInterval(refreshInterval); }',
    propHook: {
      what: 'refreshInterval',
      into: 'refreshInterval',
    },
  };

  propsToUse.recentlyUsedRanges = {
    ...propsToUse.recentlyUsedRanges,
    type: PropTypes.Array,
    value: `[]`,
    stateful: true,
  };

  propsToUse.customQuickSelectPanels = {
    ...propsToUse.customQuickSelectPanels,
    type: PropTypes.Array,
    value: `[]`,
    stateful: true,
  };

  // propsToUse.locale = {
  //   ...propsToUse.locale,
  //   type: PropTypes.String,
  // };
  propsToUse.start = {
    ...propsToUse.start,
    stateful: true,
    type: PropTypes.String,
    hidden: true,
  };
  propsToUse.end = {
    ...propsToUse.end,
    stateful: true,
    type: PropTypes.String,
    hidden: true,
  };
  propsToUse.refreshInterval = {
    ...propsToUse.refreshInterval,
    stateful: true,
  };

  return {
    componentName: 'EuiSuperDatePicker',
    props: propsToUse,
    scope: {
      EuiSuperDatePicker,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiSuperDatePicker'],
      },
    },
  };
};
