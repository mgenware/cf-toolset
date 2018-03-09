import * as React from 'react';
import app from 'common/app';
import { CodeView, CodeEditor } from 'common/controls';

interface State {
  src: string;
  dest: string;
}

export default class BaseEncoderView extends React.Component<object, State> {
  private ls: {[id: string]: string};
  private codeView: CodeView|null;

  constructor(props: object) {
    super(props);

    this.ls = app.localizedMap(localizedStrings());
    this.state = {
      src: '',
      dest: '',
    };
  }

  render() {
    const { state } = this;

    return (
<div className="container">
  <h2>{this.title()}</h2>
  <CodeEditor
    autoFocus={true}
    content={state.src}
    onChange={(content) => this.setState({src: content})}
  />
  <button type="button" className="btn btn-light mt-4" onClick={this.handleEncode}>{this.ls.encode}</button>
  <button type="button" className="btn btn-light mt-4 ml-2" onClick={this.handleDecode}>{this.ls.decode}</button>
  <button type="button" className="btn btn-light mt-4 ml-2" onClick={this.handleSwap}>{this.ls.swap}</button>
  <h2 className="mt-4">{this.ls.output}</h2>
  <CodeView
    content={this.state.dest}
    ref={(input) => this.codeView = input} 
  />
</div>
    );
  }

  encodeOverride(src: string): string {
    throw new Error('Not implemented');
  }

  decodeOverride(src: string): string {
    throw new Error('Not implemented');
  }

  title(): string {
    return '';
  }

  private handleEncode = () => {
    const { state } = this;
    this.setState({
      dest: this.encodeOverride(state.src),
    }, () => {
      this.selectCodeEditor();
    });
  }

  private handleDecode = () => {
    const { state } = this;
    this.setState({
      dest: this.decodeOverride(state.src),
    }, () => {
      this.selectCodeEditor();
    });
  }

  private handleSwap = () => {
    const { state } = this;
    this.setState({
      src: state.dest,
      dest: state.src,
    });
  }

  private selectCodeEditor = () => {
    if (this.codeView) {
      this.codeView.selectAll();
    }
  }
}

function localizedStrings(): { [id1: string]: { [id2: string]: string; }; } {
  return {
    en: {
      encode: 'Encode',
      decode: 'Decode',
      output: 'Output',
      swap: 'Swap',
    },
  
    cn: {
      encode: '编码',
      decode: '解码',
      output: '输出',
      swap: '交换',
    }
  };
  
}
