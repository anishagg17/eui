import { PropTypes } from 'react-view';
import { EuiImage } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiImage.__docgenInfo)
    ? EuiImage.__docgenInfo[0]
    : EuiImage.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.size = {
    ...propsToUse.size,
    type: PropTypes.Enum,
    value: 'original',
    options: {
      original: 'original',
      s: 's',
      m: 'm',
      l: 'l',
      xl: 'xl',
      fullWidth: 'fullWidth',
    },
    defaultValue: 'original',
    placeholder: 'image size',
  };
  propsToUse.url.value = 'https://source.unsplash.com/100x100/?Nature';
  propsToUse.alt.value = 'image_alt';

  return {
    componentName: 'EuiImage',
    props: propsToUse,
    scope: {
      EuiImage,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiImage'],
      },
    },
  };
};