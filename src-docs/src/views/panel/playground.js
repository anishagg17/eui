import { PropTypes } from 'react-view';
import { EuiPanel, EuiText } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiPanel.__docgenInfo)
    ? EuiPanel.__docgenInfo[0]
    : EuiPanel.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);
  propsToUse.children = {
    value: `<EuiText>
    <p>
      Any content inside of<strong>EuiPanel</strong> will appear here.
    </p>
  </EuiText>`,
    type: PropTypes.ReactNode,
    description: 'EuiPanel content',
    hidden: true,
  };

  return {
    componentName: 'EuiPanel',
    props: propsToUse,
    scope: {
      EuiPanel,
      EuiText,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiPanel', 'EuiText'],
      },
    },
  };
};
