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
  private codeView: CodeView|null;

  constructor(props: object) {
    super(props);

    this.state = {
      src: '',
      dest: '',
    };
  }

  render() {
    const { state } = this;
    const ls = app.ls.baseActionView;

    return (
<div>
  <h2>{this.title()}</h2>
  <CodeEditor
    autoFocus={true}
    content={state.src}
    onChange={(content) => this.setState({src: content})}
  />
  <div className="mt-4">
    {
      this.actionNames().map((name, index) => {
        return <button
          key={index}
          type="button"
          className={'btn btn-light' + (index ? ' ml-2' : '')}
          onClick={() => this.handleActionButtonClick(index, state.src)}
        >
          {name}
        </button>;
      })
    }
    <button type="button" className="btn btn-light ml-2" onClick={this.handleSwap}>{ls.swap}</button>
  </div>

  <h2 className="mt-4">{ls.output}</h2>
  <CodeView
    content={this.state.dest}
    ref={(input) => this.codeView = input} 
  />
</div>
    );
  }
  
  actionNames(): string[] {
    const ls = app.ls.baseActionView;
    return [ls.encode, ls.decode];
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
