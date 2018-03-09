import * as React from 'react';
import { ChromePicker, ColorResult, Color, PhotoshopPicker, HuePicker, AlphaPicker } from 'react-color';
import InlineCodeView from 'common/widgets/inlineCodeView';
const rgbToHex = require('lib/rgb-hex');

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
  <div className="row">
    <div className="col-md">
      <h2>RGB</h2>
      <p>
        <kbd>Hex</kbd>
        <span className="ml-2">
          <InlineCodeView content={state.rgbHex} />
        </span>
      </p>
      <p>
        <kbd>CSS</kbd>
        <span className="ml-2">
          <InlineCodeView content={state.rgbCss} />
        </span>
      </p>
    </div>
    <div className="col-md">
      <h2>RGBA</h2>
      <p>
        <kbd>Hex</kbd>
        <span className="ml-2">
          <InlineCodeView content={state.rgbaHex} />
        </span>
      </p>
      <p>
        <kbd>CSS</kbd>
        <span className="ml-2">
          <InlineCodeView content={state.rgbaCss} />
        </span>
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-md">
        <h2>HSL</h2>
        <p>
          <kbd>CSS</kbd>
          <span className="ml-2">
            <InlineCodeView content={state.hslCss} />
          </span>
        </p>
      </div>
      <div className="col-md">
        <h2>HSLA</h2>
        <p>
          <kbd>CSS</kbd>
          <span className="ml-2">
            <InlineCodeView content={state.hslaCss} />
          </span>
        </p>
      </div>
    </div>
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
  </div>
  <div className="mt-3">
    <HuePicker
      color={color}
      onChangeComplete={this.handleChangeComplete}
    />
  </div>
  <div className="mt-3 pb-4">
    <AlphaPicker
      color={color}
      onChangeComplete={this.handleChangeComplete}
    />
  </div>
</div>
    );
  }

  private handleChangeComplete = (color: ColorResult) => {
    this.setState({
      color: color,
    }, () => {
      this.formatColor();
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
