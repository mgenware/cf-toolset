import { LitElement, html, customElement, property } from 'lit-element';
import ls from '../ls';
import { copyHelper } from '../lib/clipboard';
import './flat-button';

@customElement('code-view')
export class CodeView extends LitElement {
  @property() label = '';
  @property() content = '';
  @property() highlighted = false;
  @property() hideCopyButton = false;
  @property() private copyDone = false;

  render() {
    return html`
      <div>
        <label>${this.label || ls.output}</label>
        <pre><code>${this.content}</code></pre>
        ${this.hideCopyButton || !this.content
          ? ''
          : html`
              <flat-button
                theme="gray small"
                @click=${this.handleCopy}
                .disabled=${this.copyDone}
              >
                ${this.copyDone ? ls.copied : ls.copy}
              </flat-button>
            `}
      </div>
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
