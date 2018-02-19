import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HTMLStringApp from './entries/html-string/index';

class App extends Component {
  render() {
    return (
<BrowserRouter>
  <div className="App">
    <ul>
      <li><Link to='/html-string'>HTML String</Link></li>
    </ul>
    <hr />
    <Route exact path="/html-string" component={HTMLStringApp} />
  </div>
</BrowserRouter>
    );
  }
}

export default App;
