import { html, customElement, property, css } from 'lit-element';
import ls from '../ls';
import 'lit-button';
import { copyHelper } from '../lib/clipboard';
import BaseElement from './base-element';

@customElement('inline-code-view')
export class InlineCodeView extends BaseElement {
  static get styles() {
    return css`
      code {
        margin-left: 5px;
        background-color: #ededed;
        padding: 4px 6px;
      }
    `;
  }

  @property() label = '';
  @property() content = '';
  @property() private copyDone = false;

  render() {
    return html`
      <span>
        ${this.label || ls.output}
        <code>${this.content}</code>
        <lit-button
          class="small"
          @click=${this.handleCopy}
          .disabled=${this.copyDone}
        >
          ${this.copyDone ? ls.copied : ls.copy}
        </lit-button>
      </span>
    `;
  }

  private handleCopy() {
    const { content } = this;
    if (!content) {
      return;
    }
    copyHelper(content, () => {
      this.copyDone = true;
      setTimeout(() => (this.copyDone = false), 1200);
    });
  }
}
