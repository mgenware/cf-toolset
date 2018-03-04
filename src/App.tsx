import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HTMLStringApp from './toolset/html-string/main';
import XMLStringApp from './toolset/xml-string/main';
import URLStringApp from './toolset/url-string/main';
import ColorPickerApp from './toolset/color-picker/main';

class App extends React.Component {
  render() {
    return (
<BrowserRouter>
  <div className="App">
    <ul>
      <li><Link to="/html-string">HTML String Encoder/Decoder</Link></li>
      <li><Link to="/xml-string">XML String Encoder/Decoder</Link></li>
      <li><Link to="/url-string">URL String Encoder/Decoder</Link></li>
      <li><Link to="/color-picker">Color Picker</Link></li>
    </ul>
    <hr />
    <Route exact={true} path="/html-string" component={HTMLStringApp} />
    <Route exact={true} path="/xml-string" component={XMLStringApp} />
    <Route exact={true} path="/url-string" component={URLStringApp} />
    <Route exact={true} path="/color-picker" component={ColorPickerApp} />
  </div>
</BrowserRouter>
    );
  }
}

export default App;
