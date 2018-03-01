import * as React from 'react';
import '../base';

export default class HTMLStringApp extends React.Component {
  render() {
    return (
<div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="textInput">Input</label>
      <textarea autoFocus={true} className="form-control cft-code-edit" id="textInput" rows={10} />
    </div>
  </form>
</div>
    );
  }
}
