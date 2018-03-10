import * as React from 'react';

export interface Props {
  autoFocus?: boolean;
  content?: string;
  onChange: (content: string) => void;
}

export default class CodeEditor extends React.Component<Props, object> {
  private textarea: HTMLTextAreaElement|null;

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { props } = this;
    return (
<textarea 
  autoFocus={props.autoFocus}
  className="form-control cft-code-edit"
  rows={5}
  onChange={(e) => props.onChange(e.target.value)}
  value={props.content}
  ref={(input) => this.textarea = input} 
/>
    );
  }
}
