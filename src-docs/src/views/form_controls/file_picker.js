import React, { Component, Fragment } from 'react';
import { DisplayToggles } from './display_toggles';

import {
  EuiFilePicker,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiSpacer,
  EuiSwitch,
} from '../../../../src/components';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: {},
      large: true,
    }; this.onChange = this.onChange.bind(this)

  }

  onChange(files) {
    this.setState({
      files: files,
    });
  };

  renderFiles() {
    if (this.state.files.length > 0) {
      return (
        <ul>
          {Object.keys(this.state.files).map((item, i) => (
            <li key={i}>
              <strong>{this.state.files[item].name}</strong> (
              {this.state.files[item].size} bytes)
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p>Add some files to see a demo of retrieving  the FileList</p>
      );
    }
  }

  render() {
    return (
      <Fragment>
        <EuiFlexGroup>
          <EuiFlexItem grow={2}>
            {/* DisplayToggles wrapper for Docs only */}
            <DisplayToggles
              canReadOnly={false}
              extras={[
                <EuiSwitch
                  compressed
                  label={'large'}
                  checked={this.state.large}
                  onChange={e => {
                    this.setState({ large: e.target.checked });
                  }}
                />,
              ]}>
              <EuiFilePicker
                id="asdf2"
                multiple
                initialPromptText="Select or drag and drop multiple files"
                onChange={files => {
                  this.onChange(files);
                }}
                display={this.state.large ? 'large' : 'default'}
                aria-label="Use aria labels when no actual label is in use"
              />
            </DisplayToggles>
            <EuiSpacer />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText>
              <h3>Files attached</h3>
              {this.renderFiles()}
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Fragment>
    );
  }
}
