import * as React from 'react';
import * as $ from 'jquery';

function execCopyCommand(): boolean {
  return document.execCommand('copy');
}

export interface CodeViewProps {
  content?: string;
}

export class CodeView extends React.Component<CodeViewProps, {}> {
  private textarea: HTMLTextAreaElement|null;
  private btnCopy: HTMLButtonElement|null;

  constructor(props: CodeViewProps) {
    super(props);
  }

  render() {
    const { props } = this;
    return (
<div>
  <button 
    type="button"
    className="btn btn-info btn-sm"
    onClick={this.handleCopyClick}
    data-toggle="tooltip"
    data-placement="top"
    data-title="Copied"
    data-trigger="manual"
    disabled={!props.content}
    ref={(input) => this.btnCopy = input} 
  >
    Copy
  </button>
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

  private handleCopyClick = () => {
    if (this.selectAll() && execCopyCommand() && this.btnCopy) {
      // show bootstrap tooltip
      const btn = this.btnCopy;
      // tslint:disable-next-line no-any
      ($(btn) as any).tooltip('show');
      setTimeout(() => {
        // tslint:disable-next-line no-any
        ($(btn) as any).tooltip('hide');
      }, 800);
    }
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
