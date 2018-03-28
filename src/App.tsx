import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HTMLStringApp from 'toolset/htmlString';
import XMLStringApp from 'toolset/xmlString';
import URLStringApp from 'toolset/urlString';
import ColorPickerApp from 'toolset/colorPicker';
import CaseConverter from 'toolset/caseConverter';
import HTMLPrettier from 'toolset/htmlPrettier';

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
      <li><Link to="/case-converter">Case Converter</Link></li>
      <li><Link to="/html-js-css-prettier">HTML/JavaScript/CSS Prettier</Link></li>
    </ul>
    <hr />
    <Route exact={true} path="/html-string" component={HTMLStringApp} />
    <Route exact={true} path="/xml-string" component={XMLStringApp} />
    <Route exact={true} path="/url-string" component={URLStringApp} />
    <Route exact={true} path="/color-picker" component={ColorPickerApp} />
    <Route exact={true} path="/case-converter" component={CaseConverter} />
    <Route exact={true} path="/html-js-css-prettier" component={HTMLPrettier} />
  </div>
</BrowserRouter>
    );
  }
}

export default App;
