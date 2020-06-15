import { PropTypes } from 'react-view';
import { EuiCard, EuiIcon } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const cardConfig = () => {
  const docgenInfo = Array.isArray(EuiCard.__docgenInfo)
    ? EuiCard.__docgenInfo[0]
    : EuiCard.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.title = {
    ...propsToUse.title,
    type: PropTypes.String,
    value: 'title',
  };

  propsToUse.description = {
    ...propsToUse.description,
    type: PropTypes.String,
    value: 'description',
  };

  propsToUse.image = {
    ...propsToUse.image,
    type: PropTypes.String,
  };

  propsToUse.icon = {
    ...propsToUse.icon,
    type: PropTypes.ReactNode,
    value: '<EuiIcon size="xxl" type="logoBeats" />',
  };

  propsToUse.onClick = {
    ...propsToUse.onClick,
    type: PropTypes.Function,
    value: '() => console.log("Card clicked")',
  };

  return {
    componentName: 'EuiCard',
    props: propsToUse,
    scope: {
      EuiCard,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiCard', 'EuiIcon'],
      },
    },
  };
};
