import { html, customElement, property } from 'lit-element';
import '../common/code-view';
import '../common/code-editor';
import ls from '../ls';
import { error } from '../lib/alert';
import BaseElement from '../common/base-element';

@customElement('url-data-encoder-decoder')
export default class URLDataEncoderDecoder extends BaseElement {
  @property() content = '';
  @property() input = '';
  @property() result = '';

  render() {
    return html`
      <div>
        <h2>${ls.URLDataEncoderDecoder}</h2>
        <blockquote>
          <p>${ls.examples}</p>
          <p>
            <code>😃🙉</code> <kbd>${ls.encode}</kbd>
            <code>%F0%9F%98%83%F0%9F%99%89</code>
          </p>
          <p>
            <code>%F0%9F%98%83%F0%9F%99%89</code> <kbd>${ls.decode}</kbd>
            <code>😃🙉</code>
          </p>
        </blockquote>

        <code-editor
          .autofocus=${true}
          .content=${this.input}
          @change=${this.handleOnChange}
        ></code-editor>

        <lit-button class="green" @click=${this.handleEncode}>
          ${ls.encode}
        </lit-button>
        <lit-button class="green" @click=${this.handleDecode}>
          ${ls.decode}
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
      this.result = encodeURIComponent(this.input);
    } catch (err) {
      error(err.message);
    }
  }

  private handleDecode() {
    try {
      this.result = decodeURIComponent(this.input);
    } catch (err) {
      error(err.message);
    }
  }
}
