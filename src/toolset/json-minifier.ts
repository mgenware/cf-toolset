import { LitElement, html, customElement, property } from 'lit-element';
import '../common/code-view';
import '../common/code-editor';
import ls from '../ls';
import { error } from '../lib/alert';

@customElement('json-minifier')
export class JSONMinifier extends LitElement {
  @property() content!: string;
  input = '';
  result = '';
  exampleSrc = `{
  "emoji": "\\uD83D\\uDE49\\uD83E\\uDD90",
  "list": [1, 2, 3, 4]
}`;
  exampleDest = `{"emoji":"🙉🦐","list":[1,2,3,4]}`;

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
      />

      <div class="content">
        <h2>${ls.JSONMinifier}</h2>
        <blockquote>
          <p>${ls.examples}</p>
          <p>
            <code-view
              content=${this.exampleSrc}
              lang="js"
              hideCopyButton=${true}
            />
          </p>
          <p>
            <kbd>${ls.minify}</kbd>
          </p>
          <p>
            <code-view
              content=${this.exampleDest}
              lang="js"
              hideCopyButton=${true}
            />
          </p>
        </blockquote>

        <code-editor
          autofocus=${true}
          content=${this.input}
          onChange=${this.handleOnChange}
        />

        <div class="buttons">
          <button class="button is-primary" @click=${this.handleMinify}>
            ${ls.minify}
          </button>
        </div>

        <code-view content=${this.result} lang="json" />
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

  private handleOnChange(val: string) {
    this.input = val;
  }
}
