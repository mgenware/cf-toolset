import { html, customElement } from 'lit-element';
import '../common/code-editor';
import ls from '../ls';
import BaseElement from '../common/base-element';

@customElement('character-line-counter')
export default class CharacterLineCounter extends BaseElement {
  render() {
    return html`
      <div>
        <h2>${ls.CharacterLineCounter}</h2>
        <code-editor autofocus></code-editor>
      </div>
    `;
  }
}
