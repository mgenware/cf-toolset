import { html, customElement } from 'lit-element';
import './internals/prettier-formatter';
import BaseElement from '../common/base-element';
import ls from '../ls';
import plugin from 'prettier/parser-babylon';
const plugins = [plugin];

@customElement('json-formatter')
export default class JSONFormatter extends BaseElement {
  opts = {
    printWidth: 80,
    tabWidth: 2,
  };

  forcedOpts = {
    parser: 'json',
    plugins,
  };

  render() {
    return html`
      <prettier-formatter
        .title=${ls.JSONFormatter}
        .opts=${this.opts}
        .forcedOpts=${this.forcedOpts}
      ></prettier-formatter>
    `;
  }
}
