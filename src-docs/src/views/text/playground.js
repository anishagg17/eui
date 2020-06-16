import { PropTypes } from 'react-view';
import { EuiText, EuiTextColor } from '../../../../src/components/';

import propUtilityForPlayground from '../../services/playground/props';

export const textConfig = () => {
  const docgenInfo = Array.isArray(EuiText.__docgenInfo)
    ? EuiText.__docgenInfo[0]
    : EuiText.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);
  propsToUse.children = {
    type: PropTypes.ReactNode,
    value: `<h1>This is Heading One</h1>
    <p>
      Far out in the uncharted backwaters of the <a href="#">unfashionable</a>{' '}
      end of the western spiral arm of the Galaxy lies a small unregarded
      yellow sun. When suddenly some wild JavaScript code appeared!{' '}
      <code>const whoa = &quot;!&quot;</code>
    </p>

    <pre>
      <code>const completelyUnexpected = &quot;the audacity!&quot;;</code>
    </pre>`,
    hidden: true,
  };

  return {
    componentName: 'EuiText',
    props: propsToUse,
    scope: {
      EuiText,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiText'],
      },
    },
  };
};

export const textColorConfig = () => {
  const docgenInfo = Array.isArray(EuiTextColor.__docgenInfo)
    ? EuiTextColor.__docgenInfo[0]
    : EuiTextColor.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.children = {
    type: PropTypes.ReactNode,
    value: '<h1>This is Heading One</h1>',
    hidden: true,
  };

  return {
    componentName: 'EuiTextColor',
    props: propsToUse,
    scope: {
      EuiTextColor,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiTextColor'],
      },
    },
  };
};