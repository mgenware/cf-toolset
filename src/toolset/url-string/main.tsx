import BaseEncoderView from '../_baseEncoderView/main';
import { app } from '../base';
import Lang from './lang';

export default class HtmlString extends BaseEncoderView {
  encodeOverride(src: string): string {
    return encodeURIComponent(src);
  }

  decodeOverride(src: string): string {
    return decodeURIComponent(src);
  }

  title(): string {
    return app.localizedMap(Lang).title;
  }
}