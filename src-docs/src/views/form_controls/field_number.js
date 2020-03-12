import React, { Component } from 'react';

import { EuiFieldNumber } from '../../../../src/components';
import { DisplayToggles } from './display_toggles';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this)

  }

  onChange(e) {
    const sanitizedValue = parseInt(e.target.value, 10);
    this.setState({
      value: isNaN(sanitizedValue) ? '' : sanitizedValue,
    });
  };

  render() {
    return (
      /* DisplayToggles wrapper for Docs only */
      <DisplayToggles canPrepend canAppend>
        <EuiFieldNumber
          placeholder="Placeholder text"
          value={this.state.value}
          onChange={this.onChange}
          aria-label="Use aria labels when no actual label is in use"
        />
      </DisplayToggles>
    );
  }
}
