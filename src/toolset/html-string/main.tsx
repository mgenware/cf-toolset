import BaseEncoderView from '../_baseEncoderView/main';
import { AllHtmlEntities } from 'html-entities';
const entities = new AllHtmlEntities();

export default class HtmlString extends BaseEncoderView {
  encodeOverride(src: string): string {
    return entities.encode(src);
  }

  decodeOverride(src: string): string {
    return entities.decode(src);
  }

  title(): string {
    return 'HTML';
  }
}