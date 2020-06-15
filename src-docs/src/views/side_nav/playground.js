import { PropTypes } from 'react-view';
import { EuiSideNav, EuiIcon } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const sideNavConfig = () => {
  const docgenInfo = Array.isArray(EuiSideNav.__docgenInfo)
    ? EuiSideNav.__docgenInfo[0]
    : EuiSideNav.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.isOpenOnMobile = {
    ...propsToUse.isOpenOnMobile,
    stateful: true,
  };

  propsToUse.mobileTitle = {
    ...propsToUse.mobileTitle,
    value: '<>Navigate within $APP_NAME</>',
  };

  propsToUse.toggleOpenOnMobile = {
    ...propsToUse.toggleOpenOnMobile,
    value: '() => setIsOpenOnMobile(!isOpenOnMobile)',
    propHook: {
      what: '!isOpenOnMobile',
      into: 'isOpenOnMobile',
    },
  };

  propsToUse.items = {
    ...propsToUse.items,
    type: PropTypes.Array,
    value: `[
      {
        name: 'Kibana',
        id: 0,
        items: [
          {
            name: 'Advanced settings',
            id: 1,
            onClick: () => {
              window.alert('Advanced settings');
            },
          },
          {
            name: 'Index Patterns (link)',
            id: 2,
            href: 'http://www.elastic.co',
          },
          {
            name: 'Saved Objects',
            id: 3,
            onClick: () => {
              window.alert('Saved Objects');
            },
            isSelected: true,
          },
          {
            name: 'Reporting',
            id: 4,
            onClick: () => {
              window.alert('Reporting');
            },
          },
        ],
      },
    ]`,
    stateful: true,
    hidden: true,
  };

  return {
    componentName: 'EuiSideNav',
    props: propsToUse,
    scope: {
      EuiSideNav,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiSideNav', 'EuiIcon'],
      },
    },
  };
};
