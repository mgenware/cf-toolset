import * as React from 'react';
import CopyButton from './copyButton';
import { CharInfo } from '../util/charCounter';
import CharInfoView from './charInfoView';

export interface Props {
  content?: string;
}

export default class CodeView extends React.Component<Props, object> {
  private preElement: HTMLPreElement|null;
  private charInfo?: CharInfo|null;

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
  {
    this.charInfo &&
    <div>
      <CharInfoView charInfo={this.charInfo} />
    </div>
  }
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

  componentWillReceiveProps(nextProps: Props) {
    const props = this.props;
    if (props.content !== nextProps.content) {
      this.charInfo = CharInfo.count(nextProps.content);
    }
  }

  private handleCopySelection = () => {
    return this.selectAll();
  }
}
