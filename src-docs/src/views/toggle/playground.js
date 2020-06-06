import { PropTypes } from 'react-view';
import { EuiToggle } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiToggle.__docgenInfo)
    ? EuiToggle.__docgenInfo[0]
    : EuiToggle.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.label.value = 'Is toggle on?';
  propsToUse.checked.stateful = true;
  propsToUse.children = {
    ...propsToUse.children,
    type: PropTypes.ReactNode,
    // eslint-disable-next-line quotes
    value: `{checked ? 'On' : 'Off'}`,
    hidden: true,
  };
  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    // eslint-disable-next-line quotes
    value: 'e => setChecked(e.target.checked)',
    propHook: {
      what: 'e.target.checked',
      into: 'checked',
    },
  };

  return {
    componentName: 'EuiToggle',
    props: propsToUse,
    scope: {
      EuiToggle,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiToggle'],
      },
    },
  };
};
