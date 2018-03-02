import BaseEncoderView from '../_baseEncoderView/main';

export default class HtmlString extends BaseEncoderView {
  encodeOverride(src: string): string {
    return encodeURIComponent(src);
  }

  decodeOverride(src: string): string {
    return decodeURIComponent(src);
  }

  title(): string {
    return 'URL';
  }
}