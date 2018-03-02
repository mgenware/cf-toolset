import * as React from 'react';
import { ChromePicker, ColorResult, Color, PhotoshopPicker, HuePicker, AlphaPicker } from 'react-color';

interface State {
  color: ColorResult|string;
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
  <code>{state.color}</code>
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

  handleChangeComplete = (color: ColorResult) => {
    this.setState({ color: color });
  }
}