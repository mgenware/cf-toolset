import { html, customElement, property } from 'lit-element';
import '../common/code-view';
import '../common/code-editor';
import '../common/inline-code-view';
import ls from '../ls';
import BaseElement from '../common/base-element';
import Color from 'color';

const DefaultColor = '#f6b73c';

@customElement('color-picker-converter')
export default class ColorPickerConverter extends BaseElement {
  @property() rgb = '';
  @property() hsl = '';
  @property() hex = '';
  @property() grayscale = '';

  firstUpdated() {
    this.refresh(DefaultColor);
  }

  render() {
    return html`
      <div>
        <h2>${ls.ColorPickerConverter}</h2>
        <p>
          <input
            type="color"
            id="body"
            name="body"
            value=${DefaultColor}
            @change=${this.handleChange}
          />
        </p>
        <inline-code-view
          label="HEX(RGB)"
          .content=${this.hex}
        ></inline-code-view>
        <br />
        <inline-code-view label="RGB" .content=${this.rgb}></inline-code-view>
        <br />
        <inline-code-view label="HSL" .content=${this.hsl}></inline-code-view>
        <br />
        <inline-code-view
          label=${ls.grayscale}
          .content=${this.grayscale}
        ></inline-code-view>
        <br />
      </div>
    `;
  }

  private handleChange(e: any) {
    const { value } = e.target;
    this.refresh(value);
  }

  private refresh(hex: string) {
    const c = Color(hex);
    this.hex = hex;
    this.rgb = c
      .rgb()
      .array()
      .toString();
    this.hsl = c
      .hsl()
      .round()
      .toString();
    this.grayscale = c
      .grayscale()
      .hex()
      .toString();
  }
}
