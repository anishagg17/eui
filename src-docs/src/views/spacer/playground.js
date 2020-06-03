import { EuiSpacer } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiSpacer.__docgenInfo)
    ? EuiSpacer.__docgenInfo[0]
    : EuiSpacer.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  return {
    componentName: 'EuiSpacer',
    props: propsToUse,
    scope: {
      EuiSpacer,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiSpacer'],
      },
    },
  };
};
