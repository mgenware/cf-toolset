import BaseEncoderView from '../common/baseEncoderView/main';
import app from 'common/app';

export default class HtmlString extends BaseEncoderView {
  encodeOverride(src: string): string {
    return encodeURIComponent(src);
  }

  decodeOverride(src: string): string {
    return decodeURIComponent(src);
  }

  title(): string {
    return app.localizedMap(localizedStrings()).title;
  }
}

function localizedStrings(): { [id1: string]: { [id2: string]: string; }; } {
  return {
    en: {
      title: 'URL string',
    },
  
    cn: {
      title: 'URL 字符串',
    }
  };
}
