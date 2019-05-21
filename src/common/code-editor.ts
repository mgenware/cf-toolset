import { LitElement, html, property, customElement, css } from 'lit-element';
import './char-counter/char-counter';
import CharCounterData from './char-counter/charCounterData';

@customElement('code-editor')
export class CodeEditor extends LitElement {
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
  charsInfo = CharCounterData.count('');
  @property() onChange: (value: string) => void = () => {};

  render() {
    console.log(' editor ', this.content);
    return html`
      <div>
        <label>${this.name}</label>
        <textarea
          class="editor"
          rows="10"
          autofocus=${this.autofocus}
          value=${this.content}
          @change=${this.handleChange}
          @input=${this.handleInputChange}
        ></textarea>
        ${this.disableCharInfo
          ? ''
          : html`
              <char-counter data=${this.charsInfo} />
            `}
      </div>
    `;
  }

  private handleChange(e: any) {
    console.log('on change ', this.onChange);
    const { value } = e.target;
    this.content = value;
    this.onChange(this.content);
  }

  private handleInputChange(e: any) {
    const text = e.target.value;
    if (!this.disableCharInfo) {
      this.charsInfo = CharCounterData.count(text);
    }
  }
}
