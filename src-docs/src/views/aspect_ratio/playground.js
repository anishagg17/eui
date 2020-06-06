import { PropTypes } from 'react-view';
import { EuiAspectRatio, EuiImage } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiAspectRatio.__docgenInfo)
    ? EuiAspectRatio.__docgenInfo[0]
    : EuiAspectRatio.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.children = {
    ...propsToUse.children,
    type: PropTypes.ReactNode,
    value: `<EuiImage
    size="l"
    hasShadow
    caption="Random nature image"
    alt="Random nature image"
    url="https://picsum.photos/300/300"
  />`,
    hidden: true,
  };

  propsToUse.height.value = 9;
  propsToUse.width.value = 16;

  return {
    componentName: 'EuiAspectRatio',
    props: propsToUse,
    scope: {
      EuiAspectRatio,
      EuiImage,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiAspectRatio', 'EuiImage'],
      },
    },
  };
};
