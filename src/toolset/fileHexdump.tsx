import * as React from 'react';
import app from 'common/app';
import formatBytes from 'lib/formatBytes';
import CodeView from 'common/widgets/codeView';
const hexdump = require('hexdump-js');

interface State {
  dump: string;
  sizeInfo: string;
}

export default class FileHexdump extends React.Component<object, State> {
  private ls: {[id: string]: string} = app.localizedMap(localizedStrings());

  constructor(props: object) {
    super(props);

    this.state = {
      dump: '', sizeInfo: '',
    };
  }

  render() {
    const { state } = this;
    if (FileReader && FileList && window.Blob) {
      return (
<div>
  <input type="file" id="inputFile" onChange={this.onFileChange}/>
  <p>{state.sizeInfo}</p>
  <CodeView
    content={state.dump}
    hideCounter={true}
  />
</div>
      );
    }

    return (
<div className="alert alert-danger" role="alert">{this.ls.notSupported}</div>
    );
  }

  private onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = new Uint8Array(reader.result);
      this.updateContent(arrayBuffer);
    };
    reader.readAsArrayBuffer(file);
  }

  private updateContent(bytes: Uint8Array) {
    const size = bytes.length;
    const sizeInfo = formatBytes(size);
    const dump = hexdump(bytes.buffer);

    this.setState({
      dump: dump,
      sizeInfo: sizeInfo,
    });
  }
}

function localizedStrings(): { [id1: string]: { [id2: string]: string; }; } {
  return {
    en: {
      notSupported: 'File APIs are not supported in your browser. Please consider upgrading your browser.',
    },
  
    cn: {
      notSupported: '您的浏览器不支持文件系统API，请考虑升级浏览器。',
    }
  };
}
