import * as React from 'react';
import CopyButton from './copyButton';

export interface Props {
  content?: string;
}

export default class CodeView extends React.Component<Props, object> {
  private preElement: HTMLPreElement|null;

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { props } = this;
    return (
<div>
  <CopyButton disabled={!props.content} selectHandler={this.handleCopySelection} />
  <pre
    className="cft-code-view mt-2"
    ref={(input) => this.preElement = input}
  >
    <code>{props.content}</code>
  </pre>
</div>
    );
  }

  selectAll(): boolean {
    if (this.preElement) {
      window.getSelection().selectAllChildren(this.preElement);
      return true;
    }
    return false;
  }

  private handleCopySelection = () => {
    return this.selectAll();
  }
}
