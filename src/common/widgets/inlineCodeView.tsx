import * as React from 'react';
import CopyButton from './copyButton';

function selectElementText(element: HTMLElement): boolean {
  if (window.getSelection) {
    const selection = window.getSelection();            
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    return true;
  }
  return false;
}

export interface Props {
  content?: string;
}

export default class InlineCodeView extends React.Component<Props, object> {
  private codeElement: HTMLElement|null;

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { props } = this;
    return (
<span>
  <code
    ref={(input) => this.codeElement = input}
  >
    {props.content}
  </code>
  <span className="ml-2">
    <CopyButton 
      disabled={!props.content}
      selectHandler={this.handleCopySelection}
      style="light"
    />
  </span>
</span>
    );
  }

  selectAll(): boolean {
    if (this.codeElement) {
      selectElementText(this.codeElement);
      return true;
    }
    return false;
  }

  private handleCopySelection = () => {
    return this.selectAll();
  }
}
