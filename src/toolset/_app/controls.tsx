import * as React from 'react';
import '../base';

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
<textarea
  className="cft-code-view"
  readOnly={true}
  style={{ width: '100%' }}
  rows={10}
  value={props.content}
  ref={(input) => this.textarea = input} 
/>
    );
  }
}

export interface CodeEditorProps {
  autoFocus?: boolean;
  content?: string;
  onChange: (content: string) => void;
}

export class CodeEditor extends React.Component<CodeEditorProps, {}> {
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
/>
    );
  }

}
