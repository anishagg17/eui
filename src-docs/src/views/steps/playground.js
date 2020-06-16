import { PropTypes } from 'react-view';
import {
  EuiIcon,
  EuiSteps,
  EuiSpacer,
  EuiCode,
  EuiText,
  EuiCodeBlock,
  EuiSubSteps,
} from '../../../../src/components/';
import propUtilityForPlayground from '../../services/playground/props';

export default () => {
  const docgenInfo = Array.isArray(EuiSteps.__docgenInfo)
    ? EuiSteps.__docgenInfo[0]
    : EuiSteps.__docgenInfo;
  const propsToUse = propUtilityForPlayground(docgenInfo.props);
  propsToUse.headingElement.value = 'p';
  propsToUse.steps = {
    ...propsToUse.steps,
    stateful: true,
    hidden: true,
    type: PropTypes.Array,
    value: `[ 
      {
        title: 'Step 1 has intro plus code snippet',
        children: (
          <EuiText>
            <p>Run this code snippet to install things.</p>
            <EuiCodeBlock language="bash">npm install</EuiCodeBlock>
          </EuiText>
        ),
      },
      {
        title: 'Step 2 has sub steps',
        children: (
          <EuiText>
            <p>
              In order to complete this step, do the following things{' '}
              <strong>in order</strong>.
            </p>
            <EuiSubSteps>
              <ol>
                <li>Do thing 1</li>
                <li>Do thing 2</li>
                <li>Do thing 3</li>
              </ol>
            </EuiSubSteps>
            <p>Here are some bullet point reminders.</p>
            <ul>
              <li>Reminder 1</li>
              <li>Reminder 2</li>
              <li>Reminder 3</li>
            </ul>
          </EuiText>
        ),
      },
      {
        title: 'Step 3 has an intro and one line instruction',
        children: (
          <EuiText>
            <p>
              Now that you&apos;ve completed step 2, go find the{' '}
              <EuiCode>thing</EuiCode>.
            </p>
            <p className="euiStep__subSteps">
              Go to <strong>Overview &gt;&gt; Endpoints</strong> note{' '}
              <strong>Elasticsearch</strong> as <EuiCode>thing</EuiCode>.
            </p>
          </EuiText>
        ),
      },
      {
        title: 'The last step has two options',
        children: (
          <EuiText size="s">
            <h3>
              <strong>Option 1:</strong> If you have this type of instance
            </h3>
            <EuiSubSteps>
              <ol>
                <li>Do thing 1</li>
                <li>Do thing 2</li>
                <li>Do thing 3</li>
              </ol>
            </EuiSubSteps>
            <h3>
              <strong>Option 2:</strong> If you have the other type of instance
            </h3>
            <EuiSubSteps>
              <ol>
                <li>Do thing 1</li>
                <li>Do thing 2</li>
                <li>Do thing 3</li>
              </ol>
            </EuiSubSteps>
          </EuiText>
        ),
      },
    ]`,
  };

  return {
    componentName: 'EuiSteps',
    props: propsToUse,
    scope: {
      EuiSteps,
      EuiSpacer,
      EuiCode,
      EuiText,
      EuiIcon,
      EuiCodeBlock,
      EuiSubSteps,
    },
    imports: {
      '@elastic/eui': {
        named: [
          'EuiSteps',
          'EuiCodeBlock',
          'EuiSubSteps',
          'EuiIcon',
          'EuiSpacer',
          'EuiCode',
          'EuiText',
        ],
      },
    },
  };
};