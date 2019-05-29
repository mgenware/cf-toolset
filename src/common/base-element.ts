import { LitElement } from 'lit-element';
import styles from './styles';

export default class BaseElement extends LitElement {
  constructor() {
    super();

    if (this.shadowRoot) {
      (this.shadowRoot as any).adoptedStyleSheets = [
        ...(this.shadowRoot as any).adoptedStyleSheets,
        styles,
      ];
    }
  }
}
