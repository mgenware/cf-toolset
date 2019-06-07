import { html, customElement } from 'lit-element';
import './internals/prettier-formatter';
import BaseElement from '../common/base-element';
import ls from '../ls';
import plugin from 'prettier/parser-html';
const plugins = [plugin];

@customElement('html-formatter')
export default class HTMLFormatter extends BaseElement {
  opts = {
    printWidth: 80,
    tabWidth: 2,
  };

  forcedOpts = {
    parser: 'html',
    plugins,
  };

  render() {
    return html`
      <prettier-formatter
        .title=${ls.HTMLFormatter}
        .opts=${this.opts}
        .forcedOpts=${this.forcedOpts}
      ></prettier-formatter>
    `;
  }
}
