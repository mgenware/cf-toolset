import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HTMLStringApp from './toolset/html-string/main';
import XMLStringApp from './toolset/xml-string/main';

class App extends React.Component {
  render() {
    return (
<BrowserRouter>
  <div className="App">
    <ul>
      <li><Link to="/html-string">HTML String Encoder/Decoder</Link></li>
      <li><Link to="/xml-string">XML String Encoder/Decoder</Link></li>
    </ul>
    <hr />
    <Route exact={true} path="/html-string" component={HTMLStringApp} />
    <Route exact={true} path="/xml-string" component={XMLStringApp} />
  </div>
</BrowserRouter>
    );
  }
}

export default App;
