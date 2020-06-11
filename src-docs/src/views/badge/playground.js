import { PropTypes } from 'react-view';
import { EuiBadge, EuiNotificationBadge } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const badgeConfig = () => {
  const docgenInfo = Array.isArray(EuiBadge.__docgenInfo)
    ? EuiBadge.__docgenInfo[0]
    : EuiBadge.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.onClick = {
    ...propsToUse.onClick,
    value: "() => console.log('Clicked')",
  };
  propsToUse.children = {
    type: PropTypes.ReactNode,
    // eslint-disable-next-line quotes
    value: `badge content`,
    hidden: true,
  };
  propsToUse.iconType = {
    ...propsToUse.iconType,
    type: PropTypes.String,
    value: 'cross',
  };

  return {
    componentName: 'EuiBadge',
    props: propsToUse,
    scope: {
      EuiBadge,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiBadge'],
      },
    },
  };
};

export const notificationBadgeConfig = () => {
  const docgenInfo = Array.isArray(EuiNotificationBadge.__docgenInfo)
    ? EuiNotificationBadge.__docgenInfo[0]
    : EuiNotificationBadge.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.children = {
    type: PropTypes.ReactNode,
    // eslint-disable-next-line quotes
    value: `badge content`,
    hidden: true,
  };

  return {
    componentName: 'EuiNotificationBadge',
    props: propsToUse,
    scope: {
      EuiNotificationBadge,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiNotificationBadge'],
      },
    },
  };
};
