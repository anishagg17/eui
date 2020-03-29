import React, { Component, Fragment } from 'react';

import {
  EuiHighlight,
  EuiFieldSearch,
  EuiFormRow,
  EuiSpacer,
  EuiSwitch,
} from '../../../../src/components';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: 'jumped over',
      isHighlightAll: false,
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.setHighlightAll = this.setHighlightAll.bind(this);
  }

  onSearchChange(e) {
    const searchValue = e.target.value;
    this.setState({
      searchValue,
    });
  }

  setHighlightAll(e) {
    this.setState({ isHighlightAll: e.target.checked });
  }

  render() {
    const { searchValue, isHighlightAll } = this.state;
    return (
      <Fragment>
        <EuiFieldSearch value={searchValue} onChange={this.onSearchChange} />

        <EuiSpacer size="m" />
        <EuiSwitch
          label="Highlight all"
          checked={isHighlightAll}
          onChange={e => this.setHighlightAll(e)}
        />
        <EuiSpacer size="m" />
        <EuiHighlight search={searchValue} highlightAll={isHighlightAll}>
          The quick brown fox jumped over the lazy dog
        </EuiHighlight>
      </Fragment>
    );
  }
}
