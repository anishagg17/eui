import { PropTypes } from 'react-view';
import { EuiLink } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiLink.__docgenInfo)
    ? EuiLink.__docgenInfo[0]
    : EuiLink.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);
  propsToUse.onClick.value = ' () => { } ';
  propsToUse.href = {
    type: PropTypes.String,
    value: 'http://www.elastic.co',
  };
  propsToUse.target = {
    type: PropTypes.String,
    value: '_blank',
  };
  propsToUse.children = {
    value: 'Link',
    type: PropTypes.ReactNode,
    description: 'Link text.',
    hidden: true,
  };

  return {
    componentName: 'EuiLink',
    props: propsToUse,
    scope: {
      EuiLink,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiLink'],
      },
    },
  };
};
