import * as React from 'react';
import { ChromePicker, ColorResult, Color, PhotoshopPicker, HuePicker, AlphaPicker } from 'react-color';
const rgbToHex = require('rgb-hex');

interface State {
  color: ColorResult|string;

  rgbHex?: string;
  rgbaHex?: string;
  rgbCss?: string;
  rgbaCss?: string;
}

export default class ColorPicker extends React.Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      color: '#A51F21',
    };
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
    const { rgb } = color;
    this.setState({
      color: color,
      rgbHex: '#' + rgbToHex(rgb.r, rgb.g, rgb.b),
      rgbaHex: '#' + rgbToHex(rgb.r, rgb.g, rgb.b, rgb.a),
      rgbCss: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      rgbaCss: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`,
    });
  }
}