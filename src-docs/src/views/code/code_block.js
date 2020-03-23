import React from 'react';

import { EuiCodeBlock, EuiSpacer } from '../../../../src/components';

export default () => {
  const htmlCode = `<!--I'm an example of HTML-->
  <div>
    <h1>Title</h1>
  </div>
  `;
  return (
    <div>
      <EuiCodeBlock language="html">{htmlCode}</EuiCodeBlock>

      <EuiSpacer />

      <EuiSpacer />
    </div>
  );
};
