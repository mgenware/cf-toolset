import { html, customElement, property } from 'lit-element';
import '../common/code-view';
import '../common/code-editor';
import ls from '../ls';
import { error } from '../lib/alert';
import BaseElement from '../common/base-element';

@customElement('decode-unicode-json')
export default class DecodeUnicodeJSON extends BaseElement {
  @property() content = '';
  @property() input = '';
  @property() result = '';
  exampleSrc = `{ "emoji": "\\uD83D\\uDE49\\uD83E\\uDD90" }`;
  exampleDest = `{ "emoji": "🙉🦐" }`;

  render() {
    return html`
      <div>
        <h2>${ls.DecodeUnicodeJSON}</h2>
        <blockquote>
          <p>${ls.examples}</p>
          <p>
            <code-view
              .content=${this.exampleSrc}
              .lang="js"
              .hideCopyButton=${true}
            ></code-view>
          </p>
          <p>
            <kbd>${ls.decode}</kbd>
          </p>
          <p>
            <code-view
              .content=${this.exampleDest}
              .lang="js"
              .hideCopyButton=${true}
            ></code-view>
          </p>
        </blockquote>

        <code-editor
          .autofocus=${true}
          .content=${this.input}
          @change=${this.handleOnChange}
        ></code-editor>

        <lit-button class="green" @click=${this.handleFormat}>
          ${ls.decode}
        </lit-button>

        <code-view
          .lang="json"
          .label=${ls.output}
          .content=${this.result}
        ></code-view>
      </div>
    `;
  }

  private handleFormat() {
    try {
      this.result = JSON.stringify(JSON.parse(this.input), null, 2);
    } catch (ex) {
      error(ex.message);
    }
  }

  private handleOnChange(e: CustomEvent<string>) {
    this.input = e.detail;
  }
}
