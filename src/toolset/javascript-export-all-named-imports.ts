import { html, customElement, property } from 'lit-element';
import '../common/code-view';
import '../common/code-editor';
import ls from '../ls';
import { error } from '../lib/alert';
import BaseElement from '../common/base-element';
import { splitLines } from '../lib/utils';

@customElement('javascript-export-all-named-imports')
export default class JavaScriptExportAllNamedImports extends BaseElement {
  @property() content = '';
  @property() input = '';
  @property() result = '';
  exampleSrc = `const privateVar = 123;
export const publicVar = 123;
function privateFunc(x, y) {
  return x + y;
}
export function publicFunc(x, y) {
  return x + y;
}
export class Type {
}
`;
  exampleDest = `export { Type, publicFunc, publicVar } from 'FILE_NAME';`;

  render() {
    return html`
      <div>
        <h2>${ls.JavaScriptExportAllNamedImports}</h2>
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
            <kbd>${ls.extract}</kbd>
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
          ${ls.extract}
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
      this.result = this.extract(this.input);
    } catch (ex) {
      error(ex.message);
    }
  }

  private handleOnChange(e: CustomEvent<string>) {
    this.input = e.detail;
  }

  private extract(input: string): string {
    if (!input) {
      return '';
    }
    const set = new Set<string>();
    const regex = /export (\w+ )?(\w+)\b/g;
    for (const str of splitLines(input)) {
      const match = regex.exec(str);
      // We only need first match
      if (match !== null && match.length >= 2) {
        set.add(match[2]);
      }
    }
    const members = [...set].sort();
    // Insert newlines when member.length >= 5
    if (members.length >= 5) {
      let s = '';
      for (const m of members) {
        s += `  ${m},\n`;
      }
      return `export {\n${s}} from 'FILE_NAME';`;
    }
    return `export { ${members.join(', ')} } from 'FILE_NAME';`;
  }
}
