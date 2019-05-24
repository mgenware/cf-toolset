import { html, property, customElement, css } from 'lit-element';
import './char-counter/char-counter';
import CharCounterData from './char-counter/charCounterData';
import BaseElement from './base-element';

@customElement('code-editor')
export class CodeEditor extends BaseElement {
  static get styles() {
    return css`
      :host .editor {
        font-size: 15px;
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
          Courier New, monospace;
        width: 100%;
      }
    `;
  }

  @property() name = '';
  @property() content = '';
  @property() autofocus = false;
  @property() disableCharInfo = false;
  @property() private charsInfo = CharCounterData.count('');

  render() {
    return html`
      <div>
        <label>${this.name}</label>
        <textarea
          class="editor"
          rows="10"
          .autofocus=${this.autofocus}
          .value=${this.content}
          @change=${this.handleChange}
          @input=${this.handleInputChange}
        ></textarea>
        ${this.disableCharInfo
          ? ''
          : html`
              <char-counter .data=${this.charsInfo}></char-counter>
            `}
      </div>
    `;
  }

  private handleChange(e: any) {
    const { value } = e.target;
    this.content = value;
    const event = new CustomEvent('change', { detail: value });
    this.dispatchEvent(event);
  }

  private handleInputChange(e: any) {
    const text = e.target.value;
    if (!this.disableCharInfo) {
      this.charsInfo = CharCounterData.count(text);
    }
  }
}
