import * as React from 'react';
import app from 'common/app';
import CodeEditor from 'common/widgets/codeEditor';
import CodeView from 'common/widgets/codeView';
import { html_beautify } from 'js-beautify';

interface HTMLBeautifyOptions {
  indent_size?: number;
  indent_char?: string;
  indent_with_tabs?: boolean;
  indent_handlebars?: boolean;
  eol?: string;
  end_with_newline?: boolean;
  preserve_newlines?: boolean;
  max_preserve_newlines?: number;
  indent_inner_html?: boolean;
  brace_style?: 'collapse-preserve-inline'|'collapse'|'expand'|'end-expand'|'none';
  indent_scripts?: 'keep'|'separate'|'normal';
  wrap_line_length?: number;
  wrap_attributes?: 'auto'|'force' ;
  wrap_attributes_indent_size?: number;
  unformatted?: string[];
  content_unformatted?: string[];
  extra_liners?: string|string[];
}

enum IndentOpt {
  twoSpaces = 's2',
  fourSpaces = 's4',
  tab = 'tab',
}

interface State {
  src: string;
  dest: string;
  indentOpt: IndentOpt;
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
      indentOpt: IndentOpt.twoSpaces,
    };
  }

  render() {
    const { state } = this;
    const { ls } = this;

    return (
<div>
  <h2>{ls.title}</h2>
  <form>
    <div className="form-group">
      <label htmlFor="selectIndent">{ls.indent}</label>
      <select className="form-control" id="selectIndent" value={state.indentOpt} onChange={(e) => this.setState({ indentOpt: e.target.value as IndentOpt })}>
        <option value={IndentOpt.twoSpaces}>{'2 ' + ls.spaces}</option>
        <option value={IndentOpt.fourSpaces}>{'4 ' + ls.spaces}</option>
        <option value={IndentOpt.tab}>{ls.tab}</option>
      </select>
    </div>
  </form>
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
    lang="markup"
    content={this.state.dest}
    ref={(input) => this.codeView = input} 
  />
</div>
    );
  }

  private handleFormatClick = () => {
    const { state } = this;
    const opt: HTMLBeautifyOptions = {};
    const indentOpt = state.indentOpt;
    if (indentOpt === IndentOpt.tab) {
      opt.indent_with_tabs = true;
    } else if (indentOpt === IndentOpt.twoSpaces) {
      opt.indent_with_tabs = false;
      opt.indent_size = 2;
    } else {
      opt.indent_with_tabs = false;
      opt.indent_size = 4;
    }

    this.setState({
      // tslint:disable-next-line no-any
      dest: html_beautify(state.src || '', opt as any),
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
      title: 'WebPage Source Prettify',
      prettify: 'Prettify',
      output: 'Output',
      indent: 'Indent',
      tab: 'Tab',
      spaces: 'Spaces',
    },
  
    cn: {
      title: '网页源码 格式美化',
      prettify: '美化',
      output: '输出',
      indent: '缩进',
      tab: 'Tab',
      spaces: '空格',
    }
  };
}
