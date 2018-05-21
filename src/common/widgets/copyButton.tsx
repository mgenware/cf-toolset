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

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { props } = this;
    const ls = app.ls.copyButton;

    return (
<button 
  type="button"
  className={`btn btn-sm btn-${props.style || 'info'}`}
  onClick={this.handleCopyClick}
  data-toggle="tooltip"
  data-placement="top"
  data-title={ls.copied}
  data-trigger="manual"
  disabled={props.disabled}
  ref={(input) => this.btnCopy = input}
>
  {ls.copy}
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
