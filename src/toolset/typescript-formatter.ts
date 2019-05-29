import { html, customElement } from 'lit-element';
import './internals/prettier-formatter';
import BaseElement from '../common/base-element';
import ls from '../ls';
import plugin from 'prettier/parser-typescript';
const plugins = [plugin];

@customElement('typescript-formatter')
export default class TypeScriptFormatter extends BaseElement {
  opts = {
    printWidth: 80,
    tabWidth: 2,
  };

  forcedOpts = {
    parser: 'typescript',
    plugins,
  };

  render() {
    return html`
      <prettier-formatter
        .title=${ls.TypeScriptFormatter}
        .opts=${this.opts}
        .forcedOpts=${this.forcedOpts}
      ></prettier-formatter>
    `;
  }
}
