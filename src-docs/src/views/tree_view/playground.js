import { PropTypes } from 'react-view';
import { EuiIcon, EuiTreeView, EuiToken } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiTreeView.__docgenInfo)
    ? EuiTreeView.__docgenInfo[0]
    : EuiTreeView.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);
  propsToUse.items = {
    ...propsToUse.items,
    stateful: true,
    hidden: true,
    type: PropTypes.Array,
    value: `[ 
      {
      label: 'Item One',
      id: 'item_one',
      icon: <EuiIcon type="folderClosed" />,
      iconWhenExpanded: <EuiIcon type="folderOpen" />,
      isExpanded: true,
      children: [
        {
          label: 'Item A',
          id: 'item_a',
          icon: <EuiIcon type="document" />,
        },
        {
          label: 'Item B',
          id: 'item_b',
          icon: <EuiIcon type="arrowRight" />,
          iconWhenExpanded: <EuiIcon type="arrowDown" />,
          children: [
            {
              label: 'A Cloud',
              id: 'item_cloud',
              icon: <EuiToken iconType="tokenConstant" />,
            },
            {
              label: "I'm a Bug",
              id: 'item_bug',
              icon: <EuiToken iconType="tokenEnum" />,
            },
          ],
        },
        {
          label: 'Item C',
          id: 'item_c',
          icon: <EuiIcon type="arrowRight" />,
          iconWhenExpanded: <EuiIcon type="arrowDown" />,
          children: [
            {
              label: 'Another Cloud',
              id: 'item_cloud2',
              icon: <EuiToken iconType="tokenConstant" />,
            },
            {
              label:
                'This one is a really long string that we will check truncates correctly',
              id: 'item_bug2',
              icon: <EuiToken iconType="tokenEnum" />,
            },
          ],
        },
      ],
    },
      {
        label: 'Item Two',
        id: 'item_two',
      }
    ]`,
  };

  return {
    componentName: 'EuiTreeView',
    props: propsToUse,
    scope: {
      EuiTreeView,
      EuiToken,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiTreeView', 'EuiIcon', 'EuiToken'],
      },
    },
  };
};
