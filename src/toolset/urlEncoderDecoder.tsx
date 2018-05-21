import { BaseActionView, DefaultActionType } from 'common/baseActionView';

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
}
