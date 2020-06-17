import { PropTypes } from 'react-view';
import { EuiTourStep, EuiLink, EuiText } from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export const tourConfig = () => {
  const docgenInfo = Array.isArray(EuiTourStep.__docgenInfo)
    ? EuiTourStep.__docgenInfo[0]
    : EuiTourStep.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);

  propsToUse.children = {
    ...propsToUse.children,
    type: PropTypes.ReactNode,
    value: `<EuiText>
    The tour step{' '}
    <EuiLink onClick={() => setIsStepOpen(!isStepOpen)}>anchor point</EuiLink>.
  </EuiText>`,
    hidden: true,
    propHook: ({ getInstrumentOnChange, fnBodyAppend }) => ({
      JSXAttribute(path) {
        if (path.get('name').node.name === 'onClick') {
          fnBodyAppend(
            path.get('value'),
            getInstrumentOnChange('!isStepOpen', 'isStepOpen')
          );
        }
      },
    }),
  };
  propsToUse.content = {
    ...propsToUse.content,
    type: PropTypes.ReactNode,
    value: `<EuiText>
    <p>The tour step content.</p>
  </EuiText>`,
    hidden: true,
  };
  propsToUse.isStepOpen = {
    ...propsToUse.isStepOpen,
    stateful: true,
  };
  propsToUse.onFinish = {
    ...propsToUse.onFinish,
    value: '() => setIsStepOpen(false)',
    propHook: {
      what: 'false',
      into: 'isStepOpen',
    },
  };
  propsToUse.title.value = 'Title of the current step';
  propsToUse.subtitle.value = 'Title of the full tour';
  propsToUse.stepsTotal.value = 1;

  return {
    componentName: 'EuiTourStep',
    props: propsToUse,
    scope: {
      EuiTourStep,
      EuiText,
      EuiLink,
    },
    imports: {
      '@elastic/eui': {
        named: ['EuiTourStep', 'EuiText', 'EuiLink'],
      },
    },
  };
};
