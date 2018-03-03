import * as React from 'react';
import { ChromePicker, ColorResult, Color, PhotoshopPicker, HuePicker, AlphaPicker } from 'react-color';
const rgbToHex = require('rgb-hex');

interface State {
  color: ColorResult;

  rgbHex?: string;
  rgbaHex?: string;
  rgbCss?: string;
  rgbaCss?: string;
  hslCss?: string;
  hslaCss?: string;
}

export default class ColorPicker extends React.Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      color: {
        hex: '#333333',
        rgb: {
          r: 51,
          g: 51,
          b: 51,
          a: 1,
        },
        hsl: {
          h: 0,
          s: 0,
          l: .10,
          a: 1,
        },
      },
    };
  }

  componentDidMount() {
    this.formatColor();
  }

  render() {
    const { state } = this;
    let color: Color;
    if (typeof state.color === 'string') {
      color = state.color as string;
    } else {
      color = (state.color as ColorResult).rgb;
    }

    return (
<div className="container">
  <h2>RGB</h2>
  <p>
    <kbd>Hex</kbd>
    <code className="ml-2">{state.rgbHex}</code>
  </p>
  <p>
    <kbd>CSS</kbd>
    <code className="ml-2">{state.rgbCss}</code>
  </p>
  <h2>RGBA</h2>
  <p>
    <kbd>Hex</kbd>
    <code className="ml-2">{state.rgbaHex}</code>
  </p>
  <p>
    <kbd>CSS</kbd>
    <code className="ml-2">{state.rgbaCss}</code>
  </p>
  <h2>HSL</h2>
  <p>
    <kbd>CSS</kbd>
    <code className="ml-2">{state.hslCss}</code>
  </p>
  <h2>HSLA</h2>
  <p>
    <kbd>CSS</kbd>
    <code className="ml-2">{state.hslaCss}</code>
  </p>
  <div className="row">
    <div className="col-sm-auto">
      <ChromePicker
        disableAlpha={false}
        color={color}
        onChangeComplete={this.handleChangeComplete}
      />
    </div>
    <div className="col-sm-auto">
      <PhotoshopPicker
        color={color}
        onChangeComplete={this.handleChangeComplete}
      />
    </div>
    <div className="col-sm-auto">
      <div>
        <HuePicker
          color={color}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
      <div>
        <AlphaPicker
          color={color}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    </div>
  </div>
</div>
    );
  }

  private handleChangeComplete = (color: ColorResult) => {
    this.setState({
      color: color,
    });
  }

  private formatColor() {
    const { color } = this.state;
    const { rgb, hsl } = color;
    const h = Math.round(hsl.h);
    const s = Math.round(hsl.s * 100);
    const l = Math.round(hsl.l * 100);
    this.setState({
      rgbHex: '#' + rgbToHex(rgb.r, rgb.g, rgb.b),
      rgbaHex: '#' + rgbToHex(rgb.r, rgb.g, rgb.b, rgb.a),
      rgbCss: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      rgbaCss: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`,
      hslCss: `hsl(${h}, ${s}, ${l})`,
      hslaCss: `hsla(${h}, ${s}, ${l}, ${rgb.a})`,
    });
  }
}