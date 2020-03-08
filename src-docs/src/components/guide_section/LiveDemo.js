import React from 'react'
import { LiveProvider, LivePreview, LiveError, withLive } from 'react-live'
import {
    EuiFlexGroup,
    EuiCodeBlock,
    EuiErrorBoundary,
    EuiSpacer,
    EuiTab,
    EuiTable,
    EuiTableBody,
    EuiTableHeader,
    EuiTableHeaderCell,
    EuiTableRow,
    EuiTableRowCell,
    EuiTabs,
    EuiText,
    EuiTextColor,
    EuiCodeEditor,
    EuiFlexItem,
} from '../../../../src/components';
import scope from './scope'

const getLiveCode = (code) => {
    let renderedCode = code.split('\n');
    let from = false,
        noInline = false;
    // eslint-disable-next-line guard-for-in
    for (const idx in renderedCode) {
        const line = renderedCode[idx];
        if (line.includes('import ')) {
            renderedCode[idx] = `// ${line}`;
            from = true;
        }
        if (line.includes(' from ')) {
            renderedCode[idx] = `// ${line}`;
            from = false;
        }
        if (from) renderedCode[idx] = `// ${line}`;
        if (line.includes('export default')) {
            renderedCode[idx] = renderedCode[idx].replace('export default', '');
        }
        if (line.includes('render ')) {
            noInline = true;
        }
    }

    renderedCode = renderedCode.join('\n');
    return renderedCode
}

function Live({ live, onEdit }) {
    // console.log(live)
    return (
        <>
            <EuiFlexGroup className="LiveDemoFlexGroup" gutterSize="none">
                <EuiFlexItem className="LiveDemoFlexItem"><EuiCodeEditor
                    width={'100%'}
                    value={live.code}
                    onChange={onEdit}
                    name="blah"
                    theme="github"
                    height="100%"
                    className="LiveDemoEditor"
                    mode={live.language}
                    showGutter={true}
                    setOptions={{
                        fontSize: '12px',
                        enableBasicAutocompletion: true,
                        enableSnippets: true,
                        enableLiveAutocompletion: true,
                    }}
                />   </EuiFlexItem>
                <EuiFlexItem className="LiveDemoFlexItem">
                    <div className="LiveDemoPreviewWrapper">  <LivePreview /></div></EuiFlexItem>
            </EuiFlexGroup>
            <pre className="liveError">{live.error}</pre>
        </>
    );
}

const LiveComponent = withLive(Live);

const LiveDemo = ({ code }) => {
    const [cd, setCode] = React.useState(getLiveCode(code));
    return (
        < LiveProvider code={cd} scope={scope} >
            <LiveComponent onEdit={setCode} />
        </LiveProvider >)
}

export default LiveDemo