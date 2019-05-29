import { html, customElement, property } from 'lit-element';
import '../common/code-view';
import '../common/code-editor';
import ls from '../ls';
import { error } from '../lib/alert';
import BaseElement from '../common/base-element';

@customElement('url-show-hide-unicode')
export default class URLShowHideUnicode extends BaseElement {
  @property() content = '';
  @property() input = '';
  @property() result = '';

  render() {
    return html`
      <div>
        <h2>${ls.URLUnicodeTransformer}</h2>
        <blockquote>
          <p>${ls.examples}</p>
          <p>
            <code
              >https://www.google.com/search?q=%F0%9F%98%83+%F0%9F%A5%9F%E4%BD%A0%E5%A5%BD</code
            ><br /><kbd>${ls.showUnicodeChars}</kbd><br /><code
              >https://www.google.com/search?q=😃+🥟你好</code
            >
          </p>
          <br />
          <p>
            <code>https://www.google.com/search?q=😃+🥟你好</code><br /><kbd
              >${ls.hideUnicodeChars}</kbd
            ><br /><code
              >https://www.google.com/search?q=%F0%9F%98%83+%F0%9F%A5%9F%E4%BD%A0%E5%A5%BD</code
            >
          </p>
        </blockquote>

        <code-editor
          .autofocus=${true}
          .content=${this.input}
          @change=${this.handleOnChange}
        ></code-editor>

        <lit-button class="green" @click=${this.handleDecode}>
          ${ls.showUnicodeChars}
        </lit-button>
        <lit-button class="green" @click=${this.handleEncode}>
          ${ls.hideUnicodeChars}
        </lit-button>

        <code-view .label=${ls.output} .content=${this.result}></code-view>
      </div>
    `;
  }

  private handleOnChange(e: CustomEvent<string>) {
    this.input = e.detail;
  }

  private handleEncode() {
    try {
      this.result = encodeURI(this.input);
    } catch (err) {
      error(err.message);
    }
  }

  private handleDecode() {
    try {
      this.result = decodeURI(this.input);
    } catch (err) {
      error(err.message);
    }
  }
}
