import { html, customElement, property } from 'lit-element';
import '../common/code-view';
import '../common/code-editor';
import ls from '../ls';
import { error } from '../lib/alert';
import BaseElement from '../common/base-element';

@customElement('json-minifier')
export default class JSONMinifier extends BaseElement {
  @property() content = '';
  @property() input = '';
  @property() result = '';
  exampleSrc = `{
  "emoji": "\\uD83D\\uDE49\\uD83E\\uDD90",
  "list": [1, 2, 3, 4]
}`;
  exampleDest = `{"emoji":"🙉🦐","list":[1,2,3,4]}`;

  render() {
    return html`
      <div>
        <h2>${ls.JSONMinifier}</h2>
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
            <kbd>${ls.minify}</kbd>
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

        <lit-button class="green" @click=${this.handleMinify}>
          ${ls.minify}
        </lit-button>

        <code-view
          .lang="json"
          .label=${ls.output}
          .content=${this.result}
        ></code-view>
      </div>
    `;
  }

  private handleMinify() {
    try {
      this.result = JSON.stringify(JSON.parse(this.input), null);
    } catch (ex) {
      error(ex.message);
    }
  }

  private handleOnChange(e: CustomEvent<string>) {
    this.input = e.detail;
  }
}
