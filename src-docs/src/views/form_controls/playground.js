import { PropTypes } from 'react-view';
import {
  EuiFieldText,
  EuiFieldSearch,
  EuiFieldNumber,
  EuiIcon,
  EuiFieldPassword,
  EuiSelect,
  EuiTextArea,
  EuiFilePicker,
  EuiCheckbox,
  EuiCheckboxGroup,
  EuiRadio,
  EuiRadioGroup,
  EuiSwitch,
} from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const fieldTextConfig = () => {
  const docgenInfo = Array.isArray(EuiFieldText.__docgenInfo)
    ? EuiFieldText.__docgenInfo[0]
    : EuiFieldText.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.append = {
    ...propsToUse.append,
    type: PropTypes.ReactNode,
  };
  propsToUse.prepend = {
    ...propsToUse.prepend,
    type: PropTypes.ReactNode,
  };
  propsToUse.value = {
    ...propsToUse.value,
    stateful: true,
    type: PropTypes.String,
    value: '',
  };
  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: 'e => setValue(e.target.value)',
    propHook: {
      what: 'e.target.value',
      into: 'value',
    },
  };

  return {
    componentName: 'EuiFieldText',
    props: propsToUse,
    scope: {
      EuiFieldText,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiFieldText', 'EuiIcon'],
      },
    },
  };
};

export const fieldSearchConfig = () => {
  const docgenInfo = Array.isArray(EuiFieldSearch.__docgenInfo)
    ? EuiFieldSearch.__docgenInfo[0]
    : EuiFieldSearch.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.append = {
    ...propsToUse.append,
    type: PropTypes.ReactNode,
  };
  propsToUse.prepend = {
    ...propsToUse.prepend,
    type: PropTypes.ReactNode,
  };
  propsToUse.value = {
    ...propsToUse.value,
    stateful: true,
    type: PropTypes.String,
    value: '',
  };
  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: 'e => setValue(e.target.value)',
    propHook: {
      what: 'e.target.value',
      into: 'value',
    },
  };

  return {
    componentName: 'EuiFieldSearch',
    props: propsToUse,
    scope: {
      EuiFieldSearch,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiFieldSearch', 'EuiIcon'],
      },
    },
  };
};

export const fieldNumberConfig = () => {
  const docgenInfo = Array.isArray(EuiFieldNumber.__docgenInfo)
    ? EuiFieldNumber.__docgenInfo[0]
    : EuiFieldNumber.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.append = {
    ...propsToUse.append,
    type: PropTypes.ReactNode,
  };
  propsToUse.icon = {
    ...propsToUse.icon,
    type: PropTypes.ReactNode,
  };
  propsToUse.prepend = {
    ...propsToUse.prepend,
    type: PropTypes.ReactNode,
  };
  propsToUse.value = {
    ...propsToUse.value,
    stateful: true,
    type: PropTypes.Number,
  };
  propsToUse.step = {
    ...propsToUse.step,
    type: PropTypes.Number,
  };
  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: 'e => setValue(e.target.value)',
    propHook: {
      what: 'e.target.value',
      into: 'value',
    },
  };

  return {
    componentName: 'EuiFieldNumber',
    props: propsToUse,
    scope: {
      EuiFieldNumber,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiFieldNumber', 'EuiIcon'],
      },
    },
  };
};

export const fieldPasswordConfig = () => {
  const docgenInfo = Array.isArray(EuiFieldPassword.__docgenInfo)
    ? EuiFieldPassword.__docgenInfo[0]
    : EuiFieldPassword.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.append = {
    ...propsToUse.append,
    type: PropTypes.ReactNode,
  };
  propsToUse.prepend = {
    ...propsToUse.prepend,
    type: PropTypes.ReactNode,
  };
  propsToUse.value = {
    ...propsToUse.value,
    stateful: true,
    type: PropTypes.String,
    value: '',
  };
  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: 'e => setValue(e.target.value)',
    propHook: {
      what: 'e.target.value',
      into: 'value',
    },
  };

  return {
    componentName: 'EuiFieldPassword',
    props: propsToUse,
    scope: {
      EuiFieldPassword,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiFieldPassword', 'EuiIcon'],
      },
    },
  };
};

export const selectConfig = () => {
  const docgenInfo = Array.isArray(EuiSelect.__docgenInfo)
    ? EuiSelect.__docgenInfo[0]
    : EuiSelect.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.append = {
    ...propsToUse.append,
    type: PropTypes.ReactNode,
  };
  propsToUse.prepend = {
    ...propsToUse.prepend,
    type: PropTypes.ReactNode,
  };
  propsToUse.value = {
    ...propsToUse.value,
    stateful: true,
    type: PropTypes.String,
    value: 'option_one',
  };
  propsToUse.options = {
    ...propsToUse.options,
    stateful: true,
    type: PropTypes.Array,
    value: `[
      { value: 'option_one', text: 'Option one' },
      { value: 'option_two', text: 'Option two' },
      { value: 'option_three', text: 'Option three' },
    ]`,
  };
  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: 'e => setValue(e.target.value)',
    propHook: {
      what: 'e.target.value',
      into: 'value',
    },
  };

  return {
    componentName: 'EuiSelect',
    props: propsToUse,
    scope: {
      EuiSelect,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiSelect', 'EuiIcon'],
      },
    },
  };
};

export const textAreaConfig = () => {
  const docgenInfo = Array.isArray(EuiTextArea.__docgenInfo)
    ? EuiTextArea.__docgenInfo[0]
    : EuiTextArea.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.value = {
    ...propsToUse.value,
    stateful: true,
    type: PropTypes.String,
    value: '',
  };
  propsToUse.placeholder = {
    ...propsToUse.placeholder,
    type: PropTypes.String,
    value: 'Placeholder text',
  };

  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: 'e => setValue(e.target.value)',
    propHook: {
      what: 'e.target.value',
      into: 'value',
    },
  };

  return {
    componentName: 'EuiTextArea',
    props: propsToUse,
    scope: {
      EuiTextArea,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiTextArea', 'EuiIcon'],
      },
    },
  };
};

export const filePickerConfig = () => {
  const docgenInfo = Array.isArray(EuiFilePicker.__docgenInfo)
    ? EuiFilePicker.__docgenInfo[0]
    : EuiFilePicker.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.initialPromptText = {
    ...propsToUse.initialPromptText,
    type: PropTypes.ReactNode,

    value: '<>initialPromptText</>',
  };

  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: 'files => console.log(files)',
  };

  return {
    componentName: 'EuiFilePicker',
    props: propsToUse,
    scope: {
      EuiFilePicker,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiFilePicker', 'EuiIcon'],
      },
    },
  };
};

export const checkboxConfig = () => {
  const docgenInfo = Array.isArray(EuiCheckbox.__docgenInfo)
    ? EuiCheckbox.__docgenInfo[0]
    : EuiCheckbox.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.id = {
    ...propsToUse.id,

    value: 'Plyground__checkbox',
  };
  propsToUse.label = {
    ...propsToUse.label,

    value: '<>label</>',
  };
  propsToUse.checked = {
    ...propsToUse.checked,
    stateful: true,
  };

  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: 'e => setChecked(e.target.checked)',
    propHook: {
      what: 'e.target.checked',
      into: 'checked',
    },
  };

  return {
    componentName: 'EuiCheckbox',
    props: propsToUse,
    scope: {
      EuiCheckbox,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiCheckbox', 'EuiIcon'],
      },
    },
  };
};

export const checkboxGroupConfig = () => {
  const docgenInfo = Array.isArray(EuiCheckboxGroup.__docgenInfo)
    ? EuiCheckboxGroup.__docgenInfo[0]
    : EuiCheckboxGroup.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.idToSelectedMap = {
    ...propsToUse.idToSelectedMap,

    value: `{
      ["idPrefix1"]: true,
    }`,
    type: PropTypes.Object,

    stateful: true,
  };

  propsToUse.options = {
    ...propsToUse.options,
    stateful: true,
    type: PropTypes.Array,
    value: `[
      {
        id: "idPrefix0",
        label: 'Option one',
        'data-test-sub': 'dts_test',
      },
      {
        id: "idPrefix1",
        label: 'Option two is checked by default',
        className: 'classNameTest',
      },
      {
        id: "idPrefix2",
        label: 'Option three is disabled',
        disabled: true,
      },
    ]`,
  };

  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: `optionId => {
      const newCheckboxIdToSelectedMap = {
        ...idToSelectedMap,
        ...{
          [optionId]: !idToSelectedMap[optionId],
        },
      };
      setIdToSelectedMap(newCheckboxIdToSelectedMap);
    }`,
    // stateful: true,

    // propHook: {
    //   what: 'e.target.checked',
    //   into: 'checked',
    // },
  };

  return {
    componentName: 'EuiCheckboxGroup',
    props: propsToUse,
    scope: {
      EuiCheckboxGroup,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiCheckboxGroup', 'EuiIcon'],
      },
    },
  };
};

export const switchConfig = () => {
  const docgenInfo = Array.isArray(EuiSwitch.__docgenInfo)
    ? EuiSwitch.__docgenInfo[0]
    : EuiSwitch.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.label = {
    ...propsToUse.label,
    type: PropTypes.String,
    value: 'label',
  };

  propsToUse.checked = {
    ...propsToUse.checked,
    stateful: true,
  };

  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: 'e => setChecked(e.target.checked)',
    propHook: {
      what: 'e.target.checked',
      into: 'checked',
    },
  };

  return {
    componentName: 'EuiSwitch',
    props: propsToUse,
    scope: {
      EuiSwitch,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiSwitch', 'EuiIcon'],
      },
    },
  };
};

export const radioConfig = () => {
  const docgenInfo = Array.isArray(EuiRadio.__docgenInfo)
    ? EuiRadio.__docgenInfo[0]
    : EuiRadio.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.id = {
    ...propsToUse.id,
    type: PropTypes.String,
    value: 'Plyground__radio',
  };

  propsToUse.label = {
    ...propsToUse.label,
    value: '<>label</>',
  };

  propsToUse.checked = {
    ...propsToUse.checked,
    stateful: true,
  };

  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: 'e => setChecked(e.target.checked)',
    propHook: {
      what: 'e.target.checked',
      into: 'checked',
    },
  };

  return {
    componentName: 'EuiRadio',
    props: propsToUse,
    scope: {
      EuiRadio,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiRadio', 'EuiIcon'],
      },
    },
  };
};

export const radioGroupConfig = () => {
  const docgenInfo = Array.isArray(EuiRadioGroup.__docgenInfo)
    ? EuiRadioGroup.__docgenInfo[0]
    : EuiRadioGroup.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.idSelected = {
    ...propsToUse.idSelected,
    value: 'idPrefix0',
    type: PropTypes.String,
    stateful: true,
  };

  propsToUse.options = {
    ...propsToUse.options,
    stateful: true,
    type: PropTypes.Array,
    value: `[
      {
        id: "idPrefix0",
        label: 'Option one',
      },
      {
        id: "idPrefix1",
        label: 'Option two is checked by default',
      },
      {
        id: "idPrefix2",
        label: 'Option three is disabled',
        disabled: true,
      },
    ]`,
  };

  propsToUse.onChange = {
    ...propsToUse.onChange,
    type: PropTypes.Function,
    value: `optionId => setIdSelected(optionId)`,
    propHook: {
      into: 'idSelected',
      what: 'optionId',
    },
  };

  return {
    componentName: 'EuiRadioGroup',
    props: propsToUse,
    scope: {
      EuiRadioGroup,
      EuiIcon,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiRadioGroup', 'EuiIcon'],
      },
    },
  };
};
