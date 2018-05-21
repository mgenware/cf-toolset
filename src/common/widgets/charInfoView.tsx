import * as React from 'react';
import app from 'common/app';
import { CharInfo } from '../util/charCounter';

export interface Props {
  charInfo: CharInfo;
}

export default class CharInfoView extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { props } = this;
    const ls = app.ls.charInfoView;
    const info = props.charInfo;
    return (
<div style={{borderLeft: '4px solid navy', paddingLeft: '4px', display: 'flex', fontSize: 'small', marginBottom: '20px', marginTop: '20px'}}>
  <div style={{flex: '1 1 0'}}>{ls.chars}: {info.chars}</div>
  <div style={{flex: '1 1 0'}}>{ls.charsNoSpaces}: {info.charsNoSpaces}</div>
  <div style={{flex: '1 1 0'}}>{ls.lines}: {info.lines}</div>
</div>
    );
  }
}
