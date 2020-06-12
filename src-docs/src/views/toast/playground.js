import { PropTypes } from 'react-view';
import { EuiToast } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';
import { iconTypes } from '../icon/icons';

export default () => {
  const docgenInfo = Array.isArray(EuiToast.__docgenInfo)
    ? EuiToast.__docgenInfo[0]
    : EuiToast.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);
  const optionsType = {};
  for (let i = 0; i < iconTypes.length; i++) {
    const val = iconTypes[i];
    optionsType[val] = val;
  }

  optionsType[
    'https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg'
  ] = 'https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg';

  propsToUse.onClose.value = '() => console.log("closed")';
  // propsToUse.color.value = 'primary';
  propsToUse.title = {
    ...propsToUse.title,
    type: PropTypes.ReactNode,
    value: '<h2>Toast content</h2>',
  };

  propsToUse.iconType = {
    ...propsToUse.iconType,
    type: PropTypes.Enum,
    value: 'user',
    options: optionsType,
  };

  return {
    componentName: 'EuiToast',
    props: propsToUse,
    scope: {
      EuiToast,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiToast'],
      },
    },
  };
};
