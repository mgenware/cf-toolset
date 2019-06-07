import { html, customElement, property } from 'lit-element';
import '../../common/code-view';
import '../../common/code-editor';
import 'lit-button';
import './prettier-opts';
import ls from '../../ls';
import BaseElement from '../../common/base-element';
import { error } from '../../lib/alert';
import { formatJSONObject } from '../../lib/utils';
import prettier from 'prettier/standalone';

@customElement('prettier-formatter')
export default class PrettierFormatter extends BaseElement {
  @property() title = '';
  @property() opts = {};
  // forcedOpts will be merged to user options
  @property() forcedOpts = {};
  @property() lang = '';

  @property() private input = '';
  @property() private initialOptionsContent = '';
  @property() private optionsContent = '';
  @property() private result = '';

  constructor() {
    super();
  }

  firstUpdated() {
    this.initialOptionsContent = this.optionsContent = formatJSONObject(
      this.opts,
    );
  }

  render() {
    return html`
      <div>
        <h2>${this.title}</h2>
        <code-editor
          .autofocus=${true}
          .content=${this.input}
          @change=${this.handleInputChange}
        ></code-editor>
        <prettier-opts
          .initialContent=${this.initialOptionsContent}
          .content=${this.optionsContent}
          @change=${this.handleOptsChange}
        ></prettier-opts>

        <lit-button class="green" @click=${this.handleFormat}>
          ${ls.prettify}
        </lit-button>

        <code-view
          .lang=${this.lang}
          .label=${ls.output}
          .content=${this.result}
        ></code-view>
      </div>
    `;
  }

  handleFormat() {
    try {
      const opts = this.getOptions();
      if (!opts) {
        return;
      }
      if (!this.input) {
        this.result = '';
        return;
      }
      Object.assign(opts, this.forcedOpts);
      this.result = prettier.format(this.input, opts);
    } catch (ex) {
      error(ex.message);
    }
  }

  private getOptions(): object | null {
    try {
      return JSON.parse(this.optionsContent);
    } catch (ex) {
      throw new Error(`${ls.invalidOptsJSON}: ${ex.message}`);
    }
  }

  private handleInputChange(e: CustomEvent<string>) {
    this.input = e.detail;
  }

  private handleOptsChange(e: CustomEvent<string>) {
    this.optionsContent = e.detail;
  }
}
