import { PropTypes } from 'react-view';
import { EuiPagination, EuiText } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiPagination.__docgenInfo)
    ? EuiPagination.__docgenInfo[0]
    : EuiPagination.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);
  propsToUse.pageCount = {
    ...propsToUse.pageCount,
    value: 10,
    stateful: true,
  };
  propsToUse.activePage = {
    ...propsToUse.activePage,
    value: 2,
    stateful: true,
  };
  propsToUse.onPageClick = {
    ...propsToUse.onPageClick,
    type: PropTypes.Function,
    value: 'e => setActivePage(e)',
    description: 'used to set activePage',
    propHook: {
      what: 'e',
      into: 'activePage',
    },
  };

  return {
    componentName: 'EuiPagination',
    props: propsToUse,
    scope: {
      EuiPagination,
      EuiText,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiPagination', 'EuiText'],
      },
    },
  };
};
