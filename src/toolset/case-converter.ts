import { html, customElement, property } from 'lit-element';
import '../common/code-view';
import '../common/code-editor';
import ls from '../ls';
import { Fx23StringReader } from 'fx23';
import BaseElement from '../common/base-element';

@customElement('case-converter')
export class CaseConverter extends BaseElement {
  @property() content = '';
  @property() input = '';
  @property() result = '';

  render() {
    return html`
      <div>
        <h2>${ls.CaseConverter}</h2>
        <blockquote>
          <p>${ls.examples}</p>
          <p>
            <code>hello world</code> <kbd>${ls.capitalizedBtn}</kbd>
            <code>Hello World</code>
          </p>
        </blockquote>

        <code-editor
          .autofocus=${true}
          .content=${this.input}
          @change=${this.handleOnChange}
        ></code-editor>

        <div>
          <flat-button @click=${this.handleUpperCase}>
            ${ls.uppercaseBtn}
          </flat-button>
          <flat-button @click=${this.handleLowerCase}>
            ${ls.lowercaseBtn}
          </flat-button>
          <flat-button @click=${this.handleCapitalized}>
            ${ls.capitalizedBtn}
          </flat-button>
          <flat-button @click=${this.handleSentenceCase}>
            ${ls.sentenceCaseBtn}
          </flat-button>
        </div>

        <code-view .content=${this.result} .label=${ls.output}></code-view>
      </div>
    `;
  }

  handleUpperCase() {
    this.result = this.input.toUpperCase();
  }

  handleLowerCase() {
    this.result = this.input.toLowerCase();
  }

  handleCapitalized() {
    this.result = this.toCapitalized(this.input);
  }

  handleSentenceCase() {
    this.result = this.toSentenceCase(this.input);
  }

  private handleOnChange(e: CustomEvent<string>) {
    this.input = e.detail;
  }

  private toCapitalized(src: string): string {
    const reader = new Fx23StringReader(src);
    let res = '';
    while (reader.hasNext()) {
      // ignore non-letters
      res += reader.collectWhile(c => !c.match(/[a-z]/i));
      if (reader.hasNext()) {
        res += reader.next().toUpperCase();
        res += reader.collectWhile(c => c.trim() !== '');
      }
    }
    return res;
  }

  private toSentenceCase(src: string): string {
    const reader = new Fx23StringReader(src);
    let res = '';
    while (reader.hasNext()) {
      // ignore non-letters
      res += reader.collectWhile(c => !c.match(/[a-z]/i));
      if (reader.hasNext()) {
        res += reader.next().toUpperCase();
        res += reader.collectWhile(c => c.trim() !== '.');
        // jump over the . if needed
        res += reader.next();
      }
    }
    return res;
  }
}
