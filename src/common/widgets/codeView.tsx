import * as React from 'react';
import CopyButton from './copyButton';

export interface Props {
  content?: string;
}

export default class CodeView extends React.Component<Props, object> {
  private textarea: HTMLTextAreaElement|null;

  constructor(props: Props) {
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
