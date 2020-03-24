// DON'T USE THIS
// DON'T USE THIS
// DON'T USE THIS
// DON'T USE THIS
// DON'T USE THIS

// This example JS is overly complex for simple icon usage
// and is set up this way for ease of use in our docs.
//
// Check the snippet tab for a more common usage.

import React from 'react';

import {
  EuiFlexGrid,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiText,
  EuiCopy,
} from '../../../../src/components';

export default () => {
  const iconTypes = [
    'editorAlignCenter',
    'editorAlignLeft',
    'editorAlignRight',
    'editorBold',
    'editorCodeBlock',
    'editorComment',
    'editorDistributeHorizontal',
    'editorDistributeVertical',
    'editorHeading',
    'editorItalic',
    'editorItemAlignBottom',
    'editorItemAlignCenter',
    'editorItemAlignLeft',
    'editorItemAlignMiddle',
    'editorItemAlignRight',
    'editorItemAlignTop',
    'editorLink',
    'editorOrderedList',
    'editorPositionBottomLeft',
    'editorPositionBottomRight',
    'editorPositionTopLeft',
    'editorPositionTopRight',
    'editorRedo',
    'editorStrike',
    'editorTable',
    'editorUnderline',
    'editorUndo',
    'editorUnorderedList',
  ];

  return (
    <EuiFlexGrid columns={4}>
      {iconTypes.map(iconType => (
        <EuiFlexItem
          className="guideDemo__icon"
          key={iconType}
          style={{ width: '200px' }}>
          <EuiCopy textToCopy={iconType} afterMessage={`${iconType} copied`}>
            {copy => (
              <EuiPanel onClick={copy} className="eui-textCenter">
                <EuiIcon type={iconType} />
                <EuiText size="s">
                  <p>{iconType}</p>
                </EuiText>
              </EuiPanel>
            )}
          </EuiCopy>
        </EuiFlexItem>
      ))}
    </EuiFlexGrid>
  );
};
