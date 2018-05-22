import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HTMLStringApp from 'toolset/html-encoder-decoder';
import XMLStringApp from 'toolset/xml-encoder-decoder';
import URLStringApp from 'toolset/url-encoder-decoder';
import ColorPickerApp from 'toolset/color-picker';
import CaseConverter from 'toolset/case-converter';
import HTMLPrettier from 'toolset/html-prettier';
import CharacterLineCounter from 'toolset/character-line-counter';
import FileHexdump from 'toolset/file-hex-dump';

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
