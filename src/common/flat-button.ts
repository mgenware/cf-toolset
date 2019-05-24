import { html, customElement, css, property } from 'lit-element';
import BaseElement from './base-element';

@customElement('flat-button')
export class FlatButton extends BaseElement {
  // Styles are based on https://www.w3schools.com/css/css3_buttons.asp
  static get styles() {
    return css`
      button {
        background-color: #e7e7e7;
        color: black;
        border: none;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        opacity: 1;
        padding: 10px 15px;
        transition: all 0.3s ease 0s;
        margin-bottom: 15px;
      }
      button:hover {
        opacity: 0.75;
      }
      button:active {
        filter: brightness(85%);
      }
      button:disabled {
        pointer-events: none;
        background-color: #e7e7e7;
        color: gray;
      }

      .green {
        background-color: #4caf50;
        color: white;
      } /* Green */
      .blue {
        background-color: #008cba;
        color: white;
      } /* Blue */
      .red {
        background-color: #f44336;
        color: white;
      } /* Red */
      .gray {
        background-color: #e7e7e7;
      } /* Gray */
      .black {
        background-color: #555555;
        color: white;
      } /* Black */

      .small {
        padding: 8px 10px;
      }
    `;
  }

  @property() theme = '';
  @property() disabled = false;

  render() {
    console.log(' theme ', this.theme);
    return html`
      <button class=${this.theme} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}
