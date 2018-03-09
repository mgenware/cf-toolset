import * as React from 'react';
import CopyButton from './widgets/copyButton';

export interface CodeViewProps {
  content?: string;
}

export class CodeView extends React.Component<CodeViewProps, {}> {
  private textarea: HTMLTextAreaElement|null;

  constructor(props: CodeViewProps) {
    super(props);
  }

  render() {
    const { props } = this;
    return (
<div>
  <CopyButton disabled={!props.content} selectHandler={this.handleCopySelection} />
  <textarea
    className="cft-code-view mt-2"
    readOnly={true}
    style={{ width: '100%' }}
    rows={10}
    value={props.content}
    ref={(input) => this.textarea = input} 
  />
</div>
    );
  }

  selectAll(): boolean {
    if (this.textarea) {
      this.textarea.select();
      return true;
    }
    return false;
  }

  private handleCopySelection = () => {
    return this.selectAll();
  }
}

export interface CodeEditorProps {
  autoFocus?: boolean;
  content?: string;
  onChange: (content: string) => void;
}

export class CodeEditor extends React.Component<CodeEditorProps, {}> {
  private textarea: HTMLTextAreaElement|null;

  constructor(props: CodeEditorProps) {
    super(props);
  }

  render() {
    const { props } = this;
    return (
<textarea 
  autoFocus={props.autoFocus}
  className="form-control cft-code-edit"
  rows={10}
  onChange={(e) => props.onChange(e.target.value)}
  value={props.content}
  ref={(input) => this.textarea = input} 
/>
    );
  }
}
