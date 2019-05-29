import { html, customElement, property } from 'lit-element';
import '../common/code-view';
import '../common/code-editor';
import ls from '../ls';
import { error } from '../lib/alert';
import BaseElement from '../common/base-element';
import { XmlEntities } from 'html-entities';
const entities = new XmlEntities();

@customElement('xml-data-encoder-decoder')
export default class XMLDataEncoderDecoder extends BaseElement {
  @property() content = '';
  @property() input = '';
  @property() result = '';

  render() {
    return html`
      <div>
        <h2>${ls.XMLDataEncoderDecoder}</h2>
        <blockquote>
          <p>${ls.examples}</p>
          <p>
            <code>&lt;&quot;haha&quot;&gt;</code> <kbd>${ls.encode}</kbd>
            <code>&amp;lt;&amp;quot;haha&amp;quot;&amp;gt;</code>
          </p>
          <p>
            <code>&amp;lt;&amp;quot;haha&amp;quot;&amp;gt;</code>
            <kbd>${ls.decode}</kbd> <code>&lt;&quot;haha&quot;&gt;</code>
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

        <code-view
          .lang="xml"
          .label=${ls.output}
          .content=${this.result}
        ></code-view>
      </div>
    `;
  }

  private handleOnChange(e: CustomEvent<string>) {
    this.input = e.detail;
  }

  private handleEncode() {
    try {
      this.result = entities.encode(this.input);
    } catch (err) {
      error(err.message);
    }
  }

  private handleDecode() {
    try {
      this.result = entities.decode(this.input);
    } catch (err) {
      error(err.message);
    }
  }
}
