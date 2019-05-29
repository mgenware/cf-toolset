import { html, customElement } from 'lit-element';
import './internals/prettier-formatter';
import BaseElement from '../common/base-element';
import ls from '../ls';
import plugin from 'prettier/parser-postcss';
const plugins = [plugin];

@customElement('css-formatter')
export default class CSSFormatter extends BaseElement {
  opts = {
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
  };

  forcedOpts = {
    parser: 'css',
    plugins,
  };

  render() {
    return html`
      <prettier-formatter
        .title=${ls.CSSFormatter}
        .opts=${this.opts}
        .forcedOpts=${this.forcedOpts}
      ></prettier-formatter>
    `;
  }
}
