import * as React from 'react';
import CopyButton from './copyButton';
import { CharInfo } from '../util/charCounter';
import CharInfoView from './charInfoView';

export interface Props {
  content?: string;
}

export interface State {
  charInfo?: CharInfo;
}

export default class CodeView extends React.Component<Props, State> {
  private preElement: HTMLPreElement|null;

  constructor(props: Props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { props, state } = this;
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
    state.charInfo &&
    <div>
      <CharInfoView charInfo={state.charInfo} />
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
      this.setState({
        charInfo: CharInfo.count(nextProps.content),
      });
    }
  }

  private handleCopySelection = () => {
    return this.selectAll();
  }
}
