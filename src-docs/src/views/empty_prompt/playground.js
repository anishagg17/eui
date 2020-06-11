import { PropTypes } from 'react-view';
import { EuiEmptyPrompt, EuiButton } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiEmptyPrompt.__docgenInfo)
    ? EuiEmptyPrompt.__docgenInfo[0]
    : EuiEmptyPrompt.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.titleSize.value = 'l';
  propsToUse.title.value = '<h2>You have no spice</h2>';
  propsToUse.body.value = `<p>
    Navigators use massive amounts of spice to gain a limited form of
    prescience. This allows them to safely navigate interstellar space,
    enabling trade and travel throughout the galaxy.
  </p>`;
  propsToUse.actions.value = `[<EuiButton color="primary" fill>
  1st action
</EuiButton>,
<EuiButton color="warning">
  2nd action
</EuiButton>]`;

  propsToUse.iconType = {
    ...propsToUse.iconType,
    type: PropTypes.String,
    value: 'cross',
  };

  return {
    componentName: 'EuiEmptyPrompt',
    props: propsToUse,
    scope: {
      EuiEmptyPrompt,
      EuiButton,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiEmptyPrompt', 'EuiButton'],
      },
    },
  };
};
