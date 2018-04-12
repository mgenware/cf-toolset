import * as React from 'react';
import app from 'common/app';
import { CharInfo } from '../util/charCounter';

export interface Props {
  charInfo: CharInfo;
}

export default class CharInfoView extends React.Component<Props, object> {
  private ls: {[id: string]: string};

  constructor(props: Props) {
    super(props);

    this.ls = app.localizedMap(localizedStrings());
  }

  render() {
    const { props, ls } = this;
    const info = props.charInfo;
    return (
<div style={{borderLeft: '4px solid navy', paddingLeft: '4px', display: 'flex', fontSize: 'small', marginBottom: '20px'}}>
  <div style={{flex: '1 1 0'}}>{ls.chars}: {info.chars}</div>
  <div style={{flex: '1 1 0'}}>{ls.charsNoSpaces}: {info.spaces}</div>
  <div style={{flex: '1 1 0'}}>{ls.lines}: {info.lines}</div>
</div>
    );
  }
}

function localizedStrings(): { [id1: string]: { [id2: string]: string; }; } {
  return {
    en: {
      chars: 'Characters',
      charsNoSpaces: 'Characters (no spaces)',
      lines: 'Lines',
    },
  
    cn: {
      chars: '总文字数',
      charsNoSpaces: '文字数 (无空格)',
      lines: '行数',
    }
  };
}
