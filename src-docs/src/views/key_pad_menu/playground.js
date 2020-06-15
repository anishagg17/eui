import { PropTypes } from 'react-view';
import {
  EuiKeyPadMenuItem,
  EuiIcon,
  EuiBetaBadge,
} from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const keyPadMenuItemConfig = () => {
  const docgenInfo = Array.isArray(EuiKeyPadMenuItem.__docgenInfo)
    ? EuiKeyPadMenuItem.__docgenInfo[0]
    : EuiKeyPadMenuItem.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.onClick = {
    ...propsToUse.onClick,
    value: '() =>  console.log("clicked")',
  };
  propsToUse.label = {
    ...propsToUse.label,
    value: '<>label</>',
  };
  propsToUse.betaBadgeTooltipContent = {
    ...propsToUse.betaBadgeTooltipContent,
    value: '<>betaBadge tooltip content</>',
  };

  propsToUse.betaBadgeIconType = {
    ...propsToUse.betaBadgeIconType,
    type: PropTypes.String,
  };

  propsToUse.children = {
    ...propsToUse.children,
    type: PropTypes.ReactNode,
    value: `<EuiIcon type="dashboardApp" size="l" />`,
    hidden: true,
  };

  return {
    componentName: 'EuiKeyPadMenuItem',
    props: propsToUse,
    scope: {
      EuiKeyPadMenuItem,
      EuiIcon,
      EuiBetaBadge,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiKeyPadMenuItem', 'EuiIcon', 'EuiBetaBadge'],
      },
    },
  };
};
