import * as React from 'react';
import { app } from '../base';
import Lang from './lang';
import { CodeView, CodeEditor } from '../_app/controls';
import { AllHtmlEntities } from 'html-entities';
const entities = new AllHtmlEntities();

interface State {
  src: string;
  dest: string;
}

export default class HTMLStringApp extends React.Component<object, State> {
  ls: {[id: string]: string};

  constructor(props: object) {
    super(props);

    this.ls = app.localizedDic(Lang);
    this.state = {
      src: '',
      dest: '',
    };
  }

  render() {
    const { state } = this;

    return (
<div className="container">
  <CodeEditor
    content={state.src}
    onChange={(content) => this.setState({src: content})}
  />
  <button type="button" className="btn btn-light mt-4" onClick={this.handleEncode}>{this.ls.encode}</button>
  <button type="button" className="btn btn-light mt-4 ml-2" onClick={this.handleDecode}>{this.ls.decode}</button>
  <button type="button" className="btn btn-light mt-4 ml-2" onClick={this.handleSwap}>{this.ls.swap}</button>
  <h2 className="mt-4">{this.ls.output}</h2>
  <CodeView content={this.state.dest}/>
</div>
    );
  }

  private handleEncode = () => {
    const { state } = this;
    this.setState({
      dest: entities.encode(state.src),
    });
  }

  private handleDecode = () => {
    const { state } = this;
    this.setState({
      dest: entities.decode(state.src),
    });
  }

  private handleSwap = () => {
    const { state } = this;
    this.setState({
      src: state.dest,
      dest: state.src,
    });
  }
}
