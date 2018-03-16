import { BaseActionView, DefaultActionType } from 'common/baseActionView';
import app from 'common/app';

export default class URLString extends BaseActionView {
  handleAction(index: number, src: string): string {
    switch (index) {
      case DefaultActionType.encode: {
        return encodeURIComponent(src);
      }

      case DefaultActionType.decode: {
        return decodeURIComponent(src);
      }

      default: return '';
    }
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
