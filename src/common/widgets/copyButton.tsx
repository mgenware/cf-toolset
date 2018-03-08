import * as React from 'react';
import '../base';
import * as $ from 'jquery';

export interface Props {
  disabled?: boolean;
}

export class CopyButton extends React.Component<Props, object> {
  private btnCopy: HTMLButtonElement|null;
  private ls: {[id: string]: string};

  constructor(props: Props) {
    super(props);

    this.ls = app.localizedMap(Lang);
  }

  render() {
    const { props } = this;
    return (
<button 
  type="button"
  className="btn btn-info btn-sm"
  onClick={this.handleCopyClick}
  data-toggle="tooltip"
  data-placement="top"
  data-title="Copied"
  data-trigger="manual"
  disabled={props.disabled}
  ref={(input) => this.btnCopy = input}>

</button>
    );
  }
}

function localizedStrings(): { [id1: string]: { [id2: string]: string; }; } {
  return {
    en: {
      encode: 'Encode',
      decode: 'Decode',
      output: 'Output',
      swap: 'Swap',
    },
  
    cn: {
      encode: '编码',
      decode: '解码',
      output: '输出',
      swap: '交换',
    }
  };
}
