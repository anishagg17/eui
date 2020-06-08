import { EuiHorizontalRule } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiHorizontalRule.__docgenInfo)
    ? EuiHorizontalRule.__docgenInfo[0]
    : EuiHorizontalRule.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  return {
    componentName: 'EuiHorizontalRule',
    props: propsToUse,
    scope: {
      EuiHorizontalRule,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiHorizontalRule'],
      },
    },
  };
};
