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
  <h2>{this._ls.prettify + ' ' + this.languageName()}</h2>
  <CodeEditor
    autoFocus={true}
    content={state.src}
    onChange={(content) => this.setState({src: content})}
  />
  <div className="mt-4">
    <button type="button" className="btn btn-success" onClick={this.handleFormat}>{this._ls.prettify}</button>
  </div>

  <h2 className="mt-4">{this._ls.output}</h2>
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

  private handleFormat = () => {
    const { state } = this;
    this.setState({
      dest: prettier.format(state.src || '', this.prettierOpt()),
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
      prettify: 'Prettify',
    },
  
    cn: {
      prettify: '美化',
    }
  };
}
