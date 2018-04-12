import * as React from 'react';
import { CharInfo } from '../util/charCounter';
import CharInfoView from './charInfoView';

export interface Props {
  autoFocus?: boolean;
  content?: string;
  onChange: (content: string) => void;
}

export default class CodeEditor extends React.Component<Props, object> {
  private textarea: HTMLTextAreaElement|null;
  private charInfo: CharInfo = new CharInfo(0, 0, 0);

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { props } = this;
    return (
<div>
  <textarea 
    autoFocus={props.autoFocus}
    className="form-control cft-code-edit"
    rows={5}
    onChange={this.onTextAreaChange}
    value={props.content}
    ref={(input) => this.textarea = input} 
  />
  <div>
    <CharInfoView charInfo={this.charInfo} />
  </div>
</div>
    );
  }

  private onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    this.updateCharsInfo(text);
    this.props.onChange(text);
  }

  private updateCharsInfo(s: string) {
    this.charInfo = CharInfo.count(s);
  }
}
