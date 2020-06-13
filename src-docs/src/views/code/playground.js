import { PropTypes } from 'react-view';
import { EuiCodeBlock, EuiCode } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const codeBlockConfig = () => {
  const docgenInfo = Array.isArray(EuiCodeBlock.__docgenInfo)
    ? EuiCodeBlock.__docgenInfo[0]
    : EuiCodeBlock.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.language.value = 'html';
  propsToUse.children = {
    type: PropTypes.ReactNode,
    // eslint-disable-next-line quotes
    value: `<div>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </div>`,
    hidden: true,
  };

  propsToUse.inline = {
    ...propsToUse.inline,
    type: PropTypes.Boolean,
    value: false,
  };

  return {
    componentName: 'EuiCodeBlock',
    props: propsToUse,
    scope: {
      EuiCodeBlock,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiCodeBlock'],
      },
    },
  };
};

export const codeConfig = () => {
  const docgenInfo = Array.isArray(EuiCode.__docgenInfo)
    ? EuiCode.__docgenInfo[0]
    : EuiCode.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.language.value = 'html';
  propsToUse.children = {
    type: PropTypes.ReactNode,
    // eslint-disable-next-line quotes
    value: `<div>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </div>`,
    hidden: true,
  };

  propsToUse.inline = {
    ...propsToUse.inline,
    type: PropTypes.Boolean,
    value: false,
  };

  return {
    componentName: 'EuiCode',
    props: propsToUse,
    scope: {
      EuiCode,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiCode'],
      },
    },
  };
};
