import { PropTypes } from 'react-view';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlexGrid,
} from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const flexGroupConfig = () => {
  const docgenInfo = Array.isArray(EuiFlexGroup.__docgenInfo)
    ? EuiFlexGroup.__docgenInfo[0]
    : EuiFlexGroup.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);
  propsToUse.children = {
    type: PropTypes.ReactNode,
    value: `<EuiFlexItem>Content grid item</EuiFlexItem>
    <EuiFlexItem style={{ minWidth: 100 }}>Min-width 300px</EuiFlexItem>
    <EuiFlexItem component="span">
    This is a span component
  </EuiFlexItem>
    <EuiFlexItem>
      <p>Another content grid item</p>
      <p>
        Note how both of these are the same width and height despite having
        different content?
      </p>
    </EuiFlexItem>`,
    hidden: true,
  };
  return {
    componentName: 'EuiFlexGroup',
    props: propsToUse,
    scope: {
      EuiFlexGroup,
      EuiFlexItem,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiFlexGroup', 'EuiFlexItem'],
      },
    },
  };
};

export const flexGridConfig = () => {
  const docgenInfo = Array.isArray(EuiFlexGrid.__docgenInfo)
    ? EuiFlexGrid.__docgenInfo[0]
    : EuiFlexGrid.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);
  propsToUse.component = { type: PropTypes.String, value: 'div' };
  propsToUse.children = {
    type: PropTypes.ReactNode,
    value: ` <EuiFlexItem>Content grid item</EuiFlexItem>
    <EuiFlexItem style={{ minWidth: 300 }}>Min-width 300px</EuiFlexItem>
    <EuiFlexItem component="span">
    This is a span component
  </EuiFlexItem>
    <EuiFlexItem>
      <p>Another content grid item</p>
      <p>
        Note how both of these are the same width and height despite having
        different content?
      </p>
    </EuiFlexItem>`,
    hidden: true,
  };
  return {
    componentName: 'EuiFlexGrid',
    props: propsToUse,
    scope: {
      EuiFlexGrid,
      EuiFlexItem,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiFlexGrid', 'EuiFlexItem'],
      },
    },
  };
};
