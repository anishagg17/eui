import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test';

import { EuiTextAlign, TextAlignment, ALIGNMENTS } from './text_align';

describe('EuiTextAlign', () => {
  test('is rendered', () => {
    const component = render(<EuiTextAlign {...requiredProps} />);

    expect(component).toMatchSnapshot();
  });

  describe('direction prop', () => {
    ALIGNMENTS.forEach(direction => {
      test(`${direction} is rendered`, () => {
        const component = render(
          <EuiTextAlign textAlign={direction as TextAlignment} />
        );

        expect(component).toMatchSnapshot();
      });
    });
  });
});
