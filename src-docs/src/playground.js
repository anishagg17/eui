import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { useView, Compiler, Error, Placeholder } from 'react-view';
import { EuiSpacer, EuiTitle, EuiCodeBlock } from '../../src/components';
import Knobs from './services/playground/knobs';

export default ({ config, setGhostBackground }) => {
  const getSnippet = code => {
    const regex = /return \(([\S\s]*?)(;)$/gm;
    let newCode = code.match(regex)[0];

    if (newCode.startsWith('return ('))
      newCode = newCode.replace('return (', '');

    if (newCode.endsWith(');')) {
      newCode = newCode.replace(/(\);)$/m, '');
    }

    while (newCode.startsWith('\n')) newCode = newCode.replace('\n', '');
    return newCode.trimEnd();
  };

  const Playground = () => {
    const [isGhost, setGhost] = useState(false);
    const params = useView(config);

    useEffect(() => {
      const { state } = params.knobProps;
      if (setGhostBackground) {
        let needGhostTheme = false;
        Object.keys(setGhostBackground).forEach(name => {
          if (state[name].value === setGhostBackground[name])
            needGhostTheme = true;
        });
        setGhost(needGhostTheme);
      }
    }, [params.knobProps]);

    const compilerClasses = classNames('playgroundCompiler', {
      playgroundCompiler__ghostBackground: isGhost,
    });

    return (
      <React.Fragment>
        <EuiTitle>
          <h3>{config.componentName}</h3>
        </EuiTitle>
        <div className={compilerClasses}>
          <Compiler
            {...params.compilerProps}
            minHeight={62}
            placeholder={Placeholder}
          />
        </div>
        <Error msg={params.errorProps.msg} isPopup />
        <EuiSpacer />

        <EuiCodeBlock
          language="js"
          fontSize="m"
          paddingSize="m"
          overflowHeight={300}
          isCopyable>
          {getSnippet(params.editorProps.code)}
        </EuiCodeBlock>
        <EuiSpacer />

        <Knobs {...params.knobProps} />
        <EuiSpacer />
      </React.Fragment>
    );
  };

  return <Playground />;
};
