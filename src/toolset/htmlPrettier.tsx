import * as React from 'react';
import app from 'common/app';
import CodeEditor from 'common/widgets/codeEditor';
import CodeView from 'common/widgets/codeView';
import * as prettier from 'js-beautify';

interface State {
  src: string;
  dest: string;
  indent: string;
}

export default class HTMLPrettier extends React.Component<object, State> {
  private ls: {[id: string]: string};
  private codeView: CodeView|null;

  constructor(props: object) {
    super(props);

    this.ls = app.localizedMap(localizedStrings());
    this.state = {
      src: '',
      dest: '',
      indent: '4s',
    };
  }

  render() {
    const { state } = this;
    const { ls } = this;

    return (
<div className="container">
  <h2>{ls.title}</h2>
  <CodeEditor
    autoFocus={true}
    content={state.src}
    onChange={(content) => this.setState({src: content})}
  />
  <div className="mt-4">
    <button type="button" className="btn btn-success" onClick={this.handleFormatClick}>{this.ls.prettify}</button>
  </div>

  <h2 className="mt-4">{this.ls.output}</h2>
  <CodeView
    content={this.state.dest}
    ref={(input) => this.codeView = input} 
  />
</div>
    );
  }

  private handleFormatClick = () => {
    const { state } = this;
    this.setState({
      dest: prettier.html_beautify(state.src || ''),
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

function localizedStrings(): { [id1: string]: { [id2: string]: string; }; } {
  return {
    en: {
      title: 'HTML/JavaScript/CSS Prettify',
      prettify: 'Prettify',
      output: 'Output',
      indent: 'Indent',
      tab: 'Tab',
      spaces: 'Spaces',
    },
  
    cn: {
      title: 'HTML/JavaScript/CSS 格式美化',
      prettify: '美化',
      output: '输出',
      indent: '缩进',
      tab: 'Tab',
      spaces: '空格',
    }
  };
}
