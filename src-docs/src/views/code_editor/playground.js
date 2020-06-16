import { PropTypes } from 'react-view';
import { EuiCodeEditor } from '../../../../src/components/';
import 'react-ace'; // this import can be omitted from your project, but is required for our Code Sandbox demo link to work
import 'brace/theme/github';
import 'brace/mode/javascript';
import 'brace/snippets/javascript';

export const codeEditorConfig = () => {
  // const docgenInfo = Array.isArray(EuiCodeEditor.__docgenInfo)
  //   ? EuiCodeEditor.__docgenInfo[0]
  //   : EuiCodeEditor.__docgenInfo;
  const propsToUse = {};

  propsToUse.value = {
    ...propsToUse.value,
    value: '',
    stateful: true,
    type: PropTypes.String,
  };
  propsToUse.setOptions = {
    ...propsToUse.setOptions,
    value: `{
      fontSize: '14px',
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
    }`,
    type: PropTypes.Object,
  };
  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: '(d) => { setValue(d) }',
    propHook: {
      what: 'd',
      into: 'value',
    },
  };
  propsToUse.onBlur = {
    ...propsToUse.onBlur,
    type: PropTypes.Function,
  };
  propsToUse.onFocus = {
    ...propsToUse.onFocus,
    type: PropTypes.Function,
  };
  propsToUse.theme = {
    ...propsToUse.theme,
    type: PropTypes.String,
  };
  propsToUse.mode = {
    ...propsToUse.mode,
    type: PropTypes.String,
  };

  return {
    componentName: 'EuiCodeEditor',
    props: propsToUse,
    scope: {
      EuiCodeEditor,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiCodeEditor'],
      },
      'react-ace': {},
      'brace/theme/github': {},
      'brace/snippets/javascript': {},
      'brace/mode/javascript': {},
    },
  };
};
