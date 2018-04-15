import * as React from 'react';
import { CharInfo } from '../util/charCounter';
import CharInfoView from './charInfoView';
const debounce = require('lodash.debounce');

export interface Props {
  autoFocus?: boolean;
  content?: string;
  onChange: (content: string) => void;

  charsCounterDebounceWaitTime?: number;
}

export interface State {
  charInfo: CharInfo;
}

export default class CodeEditor extends React.Component<Props, State> {
  private textarea: HTMLTextAreaElement|null;
  private handleNameChangeDebounced = debounce((text: string) => {
    this.setState({
      charInfo: CharInfo.count(text),
    });
  }, this.props.charsCounterDebounceWaitTime || 800);

  constructor(props: Props) {
    super(props);

    this.state = {
      charInfo: new CharInfo(0, 0, 0),
    };
  }

  render() {
    const { props, state } = this;
    return (
<div>
  <textarea 
    autoFocus={props.autoFocus}
    className="form-control cft-code-edit"
    rows={10}
    onChange={this.onTextAreaChange}
    value={props.content}
    ref={(input) => this.textarea = input} 
  />
  <div>
    <CharInfoView charInfo={state.charInfo} />
  </div>
</div>
    );
  }

  componentWillReceiveProps(nextProps: Props) {
    const props = this.props;
    if (props.content !== nextProps.content) {
      const text = nextProps.content;
      this.handleNameChangeDebounced(text);
    }
  }

  private onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    this.props.onChange(text);
  }
}
