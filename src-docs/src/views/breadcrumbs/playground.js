import { PropTypes } from 'react-view';
import { EuiBreadcrumbs } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiBreadcrumbs.__docgenInfo)
    ? EuiBreadcrumbs.__docgenInfo[0]
    : EuiBreadcrumbs.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.breadcrumbs = {
    ...propsToUse.breadcrumbs,
    type: PropTypes.Array,
    stateful: true,
    value: `[
      {
        text: 'Animals',
        href: '#',
        onClick: e => {
          e.preventDefault();
          console.log('You clicked Animals');
        },
        'data-test-subj': 'breadcrumbsAnimals',
        className: 'customClass',
      },
      {
        text: 'Reptiles',
        href: '#',
        onClick: e => {
          e.preventDefault();
          console.log('You clicked Reptiles');
        },
      },
      {
        text: 'Boa constrictor',
        href: '#',
        onClick: e => {
          e.preventDefault();
          console.log('You clicked Boa constrictor');
        },
      },
      {
        text: 'Edit',
      },
    ]`,
  };

  return {
    componentName: 'EuiBreadcrumbs',
    props: propsToUse,
    scope: {
      EuiBreadcrumbs,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiBreadcrumbs'],
      },
    },
  };
};
