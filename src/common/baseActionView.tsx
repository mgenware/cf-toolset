import * as React from 'react';
import app from 'common/app';
import CodeView from './widgets/codeView';
import CodeEditor from './widgets/codeEditor';

interface State {
  src: string;
  dest: string;
}

export enum DefaultActionType {
  encode, decode,
}

export class BaseActionView extends React.Component<object, State> {
  // prepend an underscore to this variable for avoiding possible name conflicts with subclasses
  private _ls: {[id: string]: string};
  private codeView: CodeView|null;

  constructor(props: object) {
    super(props);

    this._ls = app.localizedMap(localizedStrings());
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

  {
    this.actionNames().map((name, index) => {
      return <button
        key={index}
        type="button"
        className="btn btn-light mt-4"
        onClick={() => this.handleActionButtonClick(index, state.src)}
      >
        {name}
      </button>;
    })
  }
  <button type="button" className="btn btn-light mt-4 ml-2" onClick={this.handleSwap}>{this._ls.swap}</button>
  <h2 className="mt-4">{this._ls.output}</h2>
  <CodeView
    content={this.state.dest}
    ref={(input) => this.codeView = input} 
  />
</div>
    );
  }
  
  actionNames(): string[] {
    const { _ls } = this;
    return [_ls.encode, _ls.decode];
  }

  handleAction(index: number, src: string): string {
    throw new Error('Not implemented');
  }

  title(): string {
    return '';
  }

  private handleActionButtonClick = (index: number, src: string) => {
    this.setState({
      dest: this.handleAction(index, src || ''),
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
