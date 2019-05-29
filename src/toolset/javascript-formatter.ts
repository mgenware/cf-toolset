import { html, customElement } from 'lit-element';
import './internals/prettier-formatter';
import BaseElement from '../common/base-element';
import ls from '../ls';
import plugin from 'prettier/parser-babylon';
const plugins = [plugin];

@customElement('javascript-formatter')
export default class JavaScriptFormatter extends BaseElement {
  opts = {
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
  };

  forcedOpts = {
    parser: 'babylon',
    plugins,
  };

  render() {
    return html`
      <prettier-formatter
        .title=${ls.JavaScriptFormatter}
        .opts=${this.opts}
        .forcedOpts=${this.forcedOpts}
      ></prettier-formatter>
    `;
  }
}
