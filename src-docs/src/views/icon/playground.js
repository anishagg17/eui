import { PropTypes } from 'react-view';
import { EuiIcon, EuiToken } from '../../../../src/components';
// import propUtilityForPlayground from '../../services/playground/props';
import { iconTypes } from './icons';
import { iconColors } from './icon_colors';
import { tokens } from './tokens';
import { iconTypes as EditorIcons } from './editor';

export const iconConfig = () => {
  // const docgenInfo = Array.isArray(EuiIcon.__docgenInfo)
  //   ? EuiIcon.__docgenInfo[0]
  //   : EuiIcon.__docgenInfo;
  // console.log('docgenInfo', EuiIcon.__docgenInfo);
  const propsToUse = {};
  const optionsType = {};
  const optionsColor = {};

  for (let i = 0; i < iconTypes.length; i++) {
    const val = iconTypes[i];
    optionsType[val] = val;
  }
  for (let i = 0; i < EditorIcons.length; i++) {
    const val = EditorIcons[i];
    optionsType[val] = val;
  }
  optionsType[
    'https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg'
  ] = 'https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg';

  for (let i = 0; i < iconColors.length; i++) {
    const val = iconColors[i];
    optionsColor[val] = val;
  }

  propsToUse.onIconLoad = {
    type: PropTypes.Function,
    value: '() => console.log("loaded")',
  };
  propsToUse.title = {
    type: PropTypes.String,
    description: 'title',
  };
  propsToUse.titleId = {
    type: PropTypes.String,
    description: 'title Id',
  };
  propsToUse.type = {
    type: PropTypes.Enum,
    description: 'iconType can also be a string',
    value: 'alert',
    options: optionsType,
  };
  propsToUse.color = {
    type: PropTypes.Enum,
    description: 'color',
    options: optionsColor,
  };
  propsToUse.size = {
    type: PropTypes.Enum,
    description: 'size',
    options: {
      original: 'original',
      s: 's',
      m: 'm',
      l: 'l',
      xl: 'xl',
      xxl: 'xxl',
    },
  };

  return {
    componentName: 'EuiIcon',
    props: propsToUse,
    scope: {
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiIcon'],
      },
    },
  };
};

export const tokenConfig = () => {
  const propsToUse = {};
  const optionsType = {};
  const optionsColor = {};

  for (let i = 0; i < tokens.length; i++) {
    const val = tokens[i];
    optionsType[val] = val;
  }
  for (let i = 0; i < iconColors.length; i++) {
    const val = iconColors[i];
    optionsColor[val] = val;
  }

  propsToUse.title = {
    type: PropTypes.String,
    description: 'title',
  };
  propsToUse.iconType = {
    type: PropTypes.Enum,
    description: 'iconType can also be a string',
    value: 'alert',
    options: optionsType,
  };
  propsToUse.color = {
    type: PropTypes.Enum,
    description: 'color',
    options: optionsColor,
  };
  propsToUse.size = {
    type: PropTypes.Enum,
    description: 'size',
    options: {
      xs: 'xs',
      s: 's',
      m: 'm',
      l: 'l',
    },
    value: 's',
  };
  propsToUse.shape = {
    type: PropTypes.Enum,
    description: 'shape',
    options: {
      circle: 'circle',
      square: 'square',
      rectangle: 'rectangle',
    },
    value: 'circle',
  };
  propsToUse.fill = {
    type: PropTypes.Enum,
    description: 'fill',
    options: {
      dark: 'dark',
      light: 'light',
      none: 'none',
    },
    value: 'light',
  };

  return {
    componentName: 'EuiToken',
    props: propsToUse,
    scope: {
      EuiToken,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiToken'],
      },
    },
  };
};
