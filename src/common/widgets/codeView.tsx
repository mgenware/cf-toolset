import * as React from 'react';
import CopyButton from './copyButton';
import { CharInfo } from '../util/charCounter';
import CharInfoView from './charInfoView';

export interface Props {
  content?: string;
  lang?: string;
}

export interface State {
  charInfo?: CharInfo;
}

export default class CodeView extends React.Component<Props, State> {
  private textarea: HTMLTextAreaElement|null;

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
  <textarea 
    className="form-control cft-code-edit mt-2"
    rows={10}
    value={props.content}
    ref={(input) => this.textarea = input} 
  />
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
    if (this.textarea) {
      this.textarea.select();
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
