import { html, customElement, property } from 'lit-element';
import '../../common/code-view';
import '../../common/code-editor';
import 'lit-button';
import ls from '../../ls';
import BaseElement from '../../common/base-element';

@customElement('prettier-opts')
export default class PrettierOpts extends BaseElement {
  // content will be set to initialContent upon reset button click
  @property() initialContent = '';
  @property() content = '';

  render() {
    return html`
      <style>
        details {
          padding-bottom: 2rem;
        }
      </style>
      <details>
        <summary class="is-size-4">
          ${ls.options}
          <a href="https://prettier.io/docs/en/options.html" target="_blank">
            [${ls.docs}]
          </a>
        </summary>
        <code-editor
          .content=${this.content}
          .disableCharInfo=${true}
          @change=${this.handleChange}
        ></code-editor>
        <lit-button class="small" @click=${this.handleReset}>
          ${ls.reset}
        </lit-button>
      </details>
    `;
  }

  private handleReset() {
    this.content = this.initialContent;
  }

  private handleChange(e: any) {
    this.dispatchEvent(new CustomEvent('change', e));
  }
}
