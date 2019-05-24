import { html, customElement, property, css } from 'lit-element';
import ls from '../ls';
import { copyHelper } from '../lib/clipboard';
import './flat-button';
import BaseElement from './base-element';

@customElement('code-view')
export class CodeView extends BaseElement {
  static get styles() {
    return css`
      pre[class*='language-'] {
        color: #303030; /* default text color is required and related to current theme */
        padding: 1rem;
        margin: 0.5rem 0;
        overflow: auto;
        border: 0;
        border-radius: 10px;

        font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
          Courier New, monospace;
        margin-bottom: 40px;
        background: #ededed;
        line-height: 1.5;
        max-height: 30rem;
        width: 100%;
        max-width: 100%;
        hyphens: none;
        tab-size: 4;
        white-space: pre;
      }
    `;
  }

  @property() label = '';
  @property() content = '';
  @property() highlighted = false;
  @property() hideCopyButton = false;
  @property() private copyDone = false;

  render() {
    return html`
      <div>
        <h3>${this.label}</h3>
        <pre class=${`language-${this.lang || 'none'}`}><code>${this
          .content}</code></pre>
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
