import * as React from 'react';
import app from 'common/app';
import * as $ from 'jquery';

export interface Props {
  disabled?: boolean;
  style?: string;
  selectHandler: () => boolean;
}

export default class CopyButton extends React.Component<Props, object> {
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
  className={`btn btn-sm btn-${props.style || 'info'}`}
  onClick={this.handleCopyClick}
  data-toggle="tooltip"
  data-placement="top"
  data-title={this.ls.copied}
  data-trigger="manual"
  disabled={props.disabled}
  ref={(input) => this.btnCopy = input}
>
  {this.ls.copy}
</button>
    );
  }

  private handleCopyClick = () => {
    const { props } = this;
    if (props.selectHandler() && document.execCommand('copy') && this.btnCopy) {
      // show bootstrap tooltip
      const btn = this.btnCopy;
      // tslint:disable-next-line no-any
      ($(btn) as any).tooltip('show');
      setTimeout(() => {
        // tslint:disable-next-line no-any
        ($(btn) as any).tooltip('hide');
      }, 800);
    }
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
