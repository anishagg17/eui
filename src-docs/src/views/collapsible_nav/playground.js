import { PropTypes } from 'react-view';
import { EuiCollapsibleNav, EuiButton } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const collapsibleNavConfig = () => {
  const docgenInfo = Array.isArray(EuiCollapsibleNav.__docgenInfo)
    ? EuiCollapsibleNav.__docgenInfo[0]
    : EuiCollapsibleNav.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.isOpen = {
    ...propsToUse.isOpen,
    stateful: true,
  };
  propsToUse.isDocked = {
    ...propsToUse.isDocked,
    stateful: true,
  };
  propsToUse.onClose = {
    ...propsToUse.onClose,
    value: '() =>  setIsOpen(false)',
  };

  propsToUse.button = {
    ...propsToUse.button,
    type: PropTypes.ReactNode,
    value: `<EuiButton onClick={() => setIsOpen(!isOpen)}>Toggle nav</EuiButton>`,
    // hidden: true,
  };
  propsToUse.children = {
    ...propsToUse.children,
    type: PropTypes.ReactNode,
    value: `<div>
   <h1> nav content </h1>
   <EuiButton
   onClick={() => {
    setIsDocked(!isDocked);
   }}
   >Toggle Docked</EuiButton>
    </div>`,
    hidden: true,
  };

  return {
    componentName: 'EuiCollapsibleNav',
    props: propsToUse,
    scope: {
      EuiCollapsibleNav,
      EuiButton,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiCollapsibleNav', 'EuiButton'],
      },
    },
  };
};
