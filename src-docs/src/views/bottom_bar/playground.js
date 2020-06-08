import { PropTypes } from 'react-view';
import { EuiBottomBar, EuiText } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiBottomBar.__docgenInfo)
    ? EuiBottomBar.__docgenInfo[0]
    : EuiBottomBar.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);
  propsToUse.children = {
    value: `<EuiText>
    <p>
      Any content inside of<strong>EuiBottomBar</strong> will appear here.
    </p>
  </EuiText>`,
    type: PropTypes.ReactNode,
    description: 'EuiBottomBar content',
    hidden: true,
  };

  return {
    componentName: 'EuiBottomBar',
    props: propsToUse,
    scope: {
      EuiBottomBar,
      EuiText,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiBottomBar', 'EuiText'],
      },
    },
  };
};
