import BaseEncoderView from '../_baseEncoderView/main';
import { XmlEntities } from 'html-entities';
const entities = new XmlEntities();

export default class XmlString extends BaseEncoderView {
  encodeOverride(src: string): string {
    return entities.encode(src);
  }

  decodeOverride(src: string): string {
    return entities.decode(src);
  }

  title(): string {
    return 'XML';
  }
}