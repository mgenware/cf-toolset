import * as React from 'react';
import app from 'common/app';
import * as $ from 'jquery';

export interface Props {
  disabled?: boolean;
}

export class CopyButton extends React.Component<Props, object> {
  private btnCopy: HTMLButtonElement|null;
  private ls: {[id: string]: string};

  constructor(props: Props) {
    super(props);

    this.ls = app.localizedMap(localizedStrings());
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
  {this.ls.copy}
</button>
    );
  }
}

function localizedStrings(): { [id1: string]: { [id2: string]: string; }; } {
  return {
    en: {
      copy: 'Copy',
      copied: 'Copied',
    },
  
    cn: {
      copy: '复制',
      copied: '复制完毕',
    }
  };
}
