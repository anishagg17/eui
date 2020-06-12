import { PropTypes } from 'react-view';
import { EuiToolTip } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const toolTipConfig = () => {
  const docgenInfo = Array.isArray(EuiToolTip.__docgenInfo)
    ? EuiToolTip.__docgenInfo[0]
    : EuiToolTip.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.onMouseOut.value = '() => console.log("Outside the toopTip")';
  propsToUse.children = {
    ...propsToUse.children,
    type: PropTypes.ReactNode,
    value: '<h4>ToolTip content</h4>',
  };
  propsToUse.title = {
    ...propsToUse.title,
    type: PropTypes.ReactNode,
    value: '<h2>Title</h2>',
  };
  propsToUse.content = {
    ...propsToUse.content,
    type: PropTypes.ReactNode,
    value: '<h5>content</h5>',
  };

  return {
    componentName: 'EuiToolTip',
    props: propsToUse,
    scope: {
      EuiToolTip,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiToolTip'],
      },
    },
  };
};
