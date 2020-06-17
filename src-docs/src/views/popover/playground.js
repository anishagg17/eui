import { PropTypes } from 'react-view';
import { EuiButton, EuiPopover } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiPopover.__docgenInfo)
    ? EuiPopover.__docgenInfo[0]
    : EuiPopover.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);
  propsToUse.isOpen.stateful = true;
  propsToUse.closePopover.value = '() => setIsOpen(false)';
  propsToUse.button = {
    type: PropTypes.ReactNode,
    value: `<EuiButton iconType="arrowDown" iconSide="right" onClick={()=>setIsOpen(!isOpen)}>
  Show popover
</EuiButton>`,
    hidden: true,
    propHook: {
      what: '!isOpen',
      into: 'isOpen',
    },
    propHook: ({ getInstrumentOnChange, fnBodyAppend }) => ({
      JSXAttribute(path) {
        if (path.get('name').node.name === 'onClick') {
          fnBodyAppend(
            path.get('value'),
            getInstrumentOnChange('!isOpen', 'isOpen')
          );
        }
      },
    }),
  };
  propsToUse.children = {
    type: PropTypes.ReactNode,
    value: `<div style={{ width: '300px' }}>
    Popover content that&rsquo;s wider than the default width
  </div>`,
    hidden: true,
  };

  return {
    componentName: 'EuiPopover',
    props: propsToUse,
    scope: {
      EuiPopover,
      EuiButton,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiPopover', 'EuiButton'],
      },
    },
  };
};
