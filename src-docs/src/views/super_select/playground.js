import { PropTypes } from 'react-view';
import { EuiSuperSelect, EuiHealth } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const supperSelectConfig = () => {
  const docgenInfo = Array.isArray(EuiSuperSelect.__docgenInfo)
    ? EuiSuperSelect.__docgenInfo[0]
    : EuiSuperSelect.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.options = {
    ...propsToUse.options,
    type: PropTypes.Array,
    value: ` [
      {
        value: 'warning',
        inputDisplay: (
          <EuiHealth color="subdued" style={{ lineHeight: 'inherit' }}>
            Warning
          </EuiHealth>
        ),
        'data-test-subj': 'option-warning',
        disabled: true,
      },
      {
        value: 'minor',
        inputDisplay: (
          <EuiHealth color="warning" style={{ lineHeight: 'inherit' }}>
            Minor
          </EuiHealth>
        ),
        'data-test-subj': 'option-minor',
      },
      {
        value: 'critical',
        inputDisplay: (
          <EuiHealth color="danger" style={{ lineHeight: 'inherit' }}>
            Critical
          </EuiHealth>
        ),
        'data-test-subj': 'option-critical',
      },
    ]`,
    hidden: true,
    stateful: true,
  };

  propsToUse.valueOfSelected = {
    ...propsToUse.valueOfSelected,
    type: PropTypes.String,
    value: 'critical',
    stateful: true,
  };
  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: '(value) => { setValueOfSelected(value) }',
    propHook: {
      what: 'value',
      into: 'valueOfSelected',
    },
  };

  propsToUse.append = {
    ...propsToUse.append,
    type: PropTypes.ReactNode,
  };
  propsToUse.prepend = {
    ...propsToUse.prepend,
    type: PropTypes.ReactNode,
  };

  return {
    componentName: 'EuiSuperSelect',
    props: propsToUse,
    scope: {
      EuiSuperSelect,
      EuiHealth,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiSuperSelect', 'EuiHealth'],
      },
    },
  };
};
