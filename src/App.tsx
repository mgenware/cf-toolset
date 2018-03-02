import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HTMLStringApp from './toolset/html-string/main';

class App extends React.Component {
  render() {
    return (
<BrowserRouter>
  <div className="App">
    <ul>
      <li><Link to="/html-string">HTML String Encoder/Decoder</Link></li>
    </ul>
    <hr />
    <Route exact={true} path="/html-string" component={HTMLStringApp} />
  </div>
</BrowserRouter>
    );
  }
}

export default App;
