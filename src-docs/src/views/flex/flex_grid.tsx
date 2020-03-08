import React from 'react';

import { EuiFlexGrid, EuiFlexItem } from '../../../../src/components/flex';


export default () => {
  const ITEM_STYLE = { width: '300px' };
  return (
    <div>
      <EuiFlexGrid>
        <EuiFlexItem style={ITEM_STYLE}>
          <div>One</div>
        </EuiFlexItem>
        <EuiFlexItem style={ITEM_STYLE}>
          <div>Two</div>
        </EuiFlexItem>
        <EuiFlexItem style={ITEM_STYLE}>
          <div>Three</div>
        </EuiFlexItem>
        <EuiFlexItem style={ITEM_STYLE}>
          <div>Four</div>
        </EuiFlexItem>
        <EuiFlexItem style={ITEM_STYLE}>
          <div>Five</div>
        </EuiFlexItem>
        <EuiFlexItem style={ITEM_STYLE}>
          <div>Six</div>
        </EuiFlexItem>
        <EuiFlexItem style={ITEM_STYLE}>
          <div>Seven</div>
        </EuiFlexItem>
      </EuiFlexGrid>
    </div>
  )
};
