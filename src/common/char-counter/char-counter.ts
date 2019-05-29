import { LitElement, html, property, customElement, css } from 'lit-element';
import ls from '../../ls';
import CharCounterData from './charCounterData';

@customElement('char-counter')
export class CharCounter extends LitElement {
  static get styles() {
    return css`
      :host {
        border-left: 4px solid navy;
        padding-left: 4px;
        display: flex;
        font-size: small;
        margin-bottom: 20px;
        margin-top: 10px;
      }
      .col {
        flex: 1 1 0;
      }
    `;
  }

  @property() data = CharCounterData.count();

  render() {
    const { data } = this;
    return html`
      <div>
        <div class="col">${ls.chars}: ${data.chars}</div>
        <div class="col">${ls.charsNoSpaces}: ${data.charsNoSpaces}</div>
        <div class="col">${ls.lines}: ${data.lines}</div>
      </div>
    `;
  }
}
