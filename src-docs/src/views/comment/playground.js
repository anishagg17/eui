import { PropTypes } from 'react-view';
import {
  EuiComment,
  EuiButtonIcon,
  EuiAvatar,
} from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const commentConfig = () => {
  const docgenInfo = Array.isArray(EuiComment.__docgenInfo)
    ? EuiComment.__docgenInfo[0]
    : EuiComment.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.username.value = 'Juana';
  propsToUse.timestamp.value = '<>Jan 1, 2020</>';
  propsToUse.event.value = '<>added a comment</>';
  propsToUse.actions = {
    ...propsToUse.actions,
    value: `<EuiButtonIcon
    title="Custom action"
    aria-label="Custom action"
    color="subdued"
    iconType="copy"
  />`,
  };
  propsToUse.timelineIcon = {
    ...propsToUse.timelineIcon,
    type: PropTypes.ReactNode,
    value: `<EuiAvatar
    imageUrl="https://source.unsplash.com/64x64/?woman"
    size="l"
    name="Juana"
  />`,
  };

  return {
    componentName: 'EuiComment',
    props: propsToUse,
    scope: {
      EuiComment,
      EuiButtonIcon,
      EuiAvatar,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiComment', 'EuiButtonIcon', 'EuiAvatar'],
      },
    },
  };
};
