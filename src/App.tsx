import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as fs from 'fs';
import * as nodepath from 'path';
import * as fss from 'fs-syncx';
const firstline = require('firstline');

class Tool {
  constructor(
    public name: string,
    public url: string,
    // tslint:disable-next-line no-any
    public cls: any,
  ) { }
}

interface State {
  tools: Tool[];
}

class App extends React.Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      tools: []
    };
  }

  async componentDidMount() {
    const files = fss.listFiles(nodepath.join(__dirname, './toolset')).map((info) => info.name);
    const urls = files.map((s) => s.replace(/\.[^/.]+$/, ''));
    const names = await Promise.all(files.map(async (file) => {
      const line = (await firstline(file)) as string;
      let name = line;
      // Drop the "// #" to get the title
      if (line.length > 4) {
        name = line.substr(4);
      }

      return name;
    }));

    const tools: Tool[] = [];
    for (let i = 0; i < files.length; i++) {
      const tool = new Tool(names[i], urls[i], require(files[i]));
      tools.push(tool);
    }

    this.setState({
      tools: tools,
    });
  }

  render() {
    const { state } = this;
    return (
<BrowserRouter>
  <div className="App container-fluid">
    <div className="row">
      <div className="col-auto">
        <div className="list-group">
          {state.tools.map((t) => <Link className="list-group-item list-group-item-action" key={t.url} to={`/${(t.url)}`}>{t.name}</Link>)}
        </div>
      </div>
      <div className="col">
        {state.tools.map((t) => <Route key={t.url} exact={true} path={`/${(t.url)}`} component={t.cls} />)}
      </div>
    </div>
  </div>
</BrowserRouter>
    );
  }
}

export default App;
