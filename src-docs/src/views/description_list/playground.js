import { PropTypes } from 'react-view';
import {
  EuiDescriptionList,
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
} from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const descriptionListConfig = () => {
  const docgenInfo = Array.isArray(EuiDescriptionList.__docgenInfo)
    ? EuiDescriptionList.__docgenInfo[0]
    : EuiDescriptionList.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.children = {
    ...propsToUse.children,
    type: PropTypes.ReactNode,
    value: `<EuiDescriptionListTitle>Dota 2</EuiDescriptionListTitle>
    <EuiDescriptionListDescription>
      A videogame that I have spent way too much time on over the years.
    </EuiDescriptionListDescription>
    <EuiDescriptionListTitle>Kings Quest VI</EuiDescriptionListTitle>
    <EuiDescriptionListDescription>
      The game that forced me to learn DOS.
    </EuiDescriptionListDescription>`,
    hidden: true,
  };

  return {
    componentName: 'EuiDescriptionList',
    props: propsToUse,
    scope: {
      EuiDescriptionList,
      EuiDescriptionListDescription,
      EuiDescriptionListTitle,
    },
    imports: {
      '@elastic/eui': {
        named: [
          'EuiDescriptionList',
          'EuiDescriptionListDescription',
          'EuiDescriptionListTitle',
        ],
      },
    },
  };
};
