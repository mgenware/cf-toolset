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
import CharacterLineCounter from 'toolset/characterLineCounter';
import FileHexdump from 'toolset/fileHexdump';

// tslint:disable-next-line no-any
const toolset: any[] = [
  ['HTML String Encoder and Decoder', HTMLStringApp],
  ['XML String Encoder and Decoder', XMLStringApp],
  ['URL String Encoder and Decoder', URLStringApp],
  ['Color Picker', ColorPickerApp],
  ['Case Converter', CaseConverter],
  ['WebPage Source Prettify', HTMLPrettier],
  ['Character or Line Counter', CharacterLineCounter],
  ['Hexdump of a file', FileHexdump],
];

class App extends React.Component {
  render() {
    return (
<BrowserRouter>
  <div className="App container-fluid">
    <div className="row">
      <div className="col-auto">
        <div className="list-group">
          {toolset.map((t) => <Link className="list-group-item list-group-item-action" key={t[0]} to={`/${(t[0])}`}>{t[0]}</Link>)}
        </div>
      </div>
      <div className="col">
        {toolset.map((t) => <Route key={t[0]} exact={true} path={`/${(t[0])}`} component={t[1]} />)}
      </div>
    </div>
  </div>
</BrowserRouter>
    );
  }
}

export default App;
