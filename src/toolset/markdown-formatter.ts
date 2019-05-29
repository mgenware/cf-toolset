import { html, customElement } from 'lit-element';
import './internals/prettier-formatter';
import BaseElement from '../common/base-element';
import ls from '../ls';
import plugin from 'prettier/parser-markdown';
const plugins = [plugin];

@customElement('markdown-formatter')
export default class MarkdownFormatter extends BaseElement {
  opts = {
    printWidth: 80,
    tabWidth: 2,
  };

  forcedOpts = {
    parser: 'markdown',
    plugins,
  };

  render() {
    return html`
      <prettier-formatter
        .title=${ls.MarkdownFormatter}
        .opts=${this.opts}
        .forcedOpts=${this.forcedOpts}
      ></prettier-formatter>
    `;
  }
}
