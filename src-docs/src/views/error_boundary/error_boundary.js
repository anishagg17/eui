import React from 'react';

import { EuiErrorBoundary } from '../../../../src/components';

export default () => {
  const BadComponent = () => {
    throw new Error(
      "I'm here to kick butt and chew bubblegum. And I'm all out of gum."
    );
  };
  return (
    <EuiErrorBoundary>
      <BadComponent />
    </EuiErrorBoundary>
  );
};
