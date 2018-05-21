import * as React from 'react';
import app from 'common/app';
import CodeEditor from './widgets/codeEditor';
import CodeView from './widgets/codeView';
import * as prettier from 'prettier';

interface State {
  src: string;
  dest: string;
}

export class BasePrettier extends React.Component<object, State> {
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
    const ls = app.ls.prettier;

    return (
<div>
  <h2>{ls.prettify + ' ' + this.languageName()}</h2>
  <CodeEditor
    autoFocus={true}
    content={state.src}
    onChange={(content) => this.setState({src: content})}
  />
  <div className="mt-4">
    <button type="button" className="btn btn-success" onClick={this.handleFormatClick}>{ls.prettify}</button>
  </div>

  <h2 className="mt-4">{ls.output}</h2>
  <CodeView
    content={this.state.dest}
    ref={(input) => this.codeView = input} 
  />
</div>
    );
  }

  languageName(): string {
    return '';
  }

  prettierOpt(): prettier.Options {
    throw new Error('Not implemented');
  }

  private handleFormatClick = () => {
    const { state } = this;
    this.setState({
      dest: prettier.format(state.src || '', this.prettierOpt()),
    }, () => {
      this.selectCodeEditor();
    });
  }

  private selectCodeEditor = () => {
    if (this.codeView) {
      this.codeView.selectAll();
    }
  }
}
