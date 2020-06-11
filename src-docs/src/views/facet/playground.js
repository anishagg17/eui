import { PropTypes } from 'react-view';
import {
  EuiFacetButton,
  EuiIcon,
  EuiAvatar,
  EuiFacetGroup,
} from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const facetButtonConfig = () => {
  const docgenInfo = Array.isArray(EuiFacetButton.__docgenInfo)
    ? EuiFacetButton.__docgenInfo[0]
    : EuiFacetButton.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);
  propsToUse.onClick = {
    ...propsToUse.onClick,
    value: "() => console.log('Clicked')",
  };
  propsToUse.children = {
    type: PropTypes.ReactNode,
    // eslint-disable-next-line quotes
    value: `facet content`,
    hidden: true,
  };
  propsToUse.icon = {
    type: PropTypes.ReactNode,
    // eslint-disable-next-line quotes
    value: `<EuiIcon type="dot" color="secondary" />`,
  };

  return {
    componentName: 'EuiFacetButton',
    props: propsToUse,
    scope: {
      EuiFacetButton,
      EuiIcon,
      EuiAvatar,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiFacetButton', 'EuiIcon', 'EuiAvatar'],
      },
    },
  };
};

export const facetLayoutConfig = () => {
  const docgenInfo = Array.isArray(EuiFacetGroup.__docgenInfo)
    ? EuiFacetGroup.__docgenInfo[0]
    : EuiFacetGroup.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.children = {
    type: PropTypes.ReactNode,
    // eslint-disable-next-line quotes
    value: `<EuiFacetButton quantity={6} isDisabled>
    Disabled
  </EuiFacetButton>
  <EuiFacetButton
    quantity={6}
    icon={<EuiAvatar size="s" name="Avatar Jones" />}>
    Avatar as icon
  </EuiFacetButton>
  <EuiFacetButton quantity={6} isLoading>
    Loading
  </EuiFacetButton>`,
    hidden: true,
  };

  return {
    componentName: 'EuiFacetGroup',
    props: propsToUse,
    scope: {
      EuiFacetButton,
      EuiFacetGroup,
      EuiIcon,
      EuiAvatar,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiFacetButton', 'EuiIcon', 'EuiAvatar', 'EuiFacetGroup'],
      },
    },
  };
};
