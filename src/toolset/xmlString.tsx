import { BaseActionView, DefaultActionType } from 'common/baseActionView';
import { XmlEntities } from 'html-entities';
const entities = new XmlEntities();

export default class XmlString extends BaseActionView {
  handleAction(index: number, src: string): string {
    switch (index) {
      case DefaultActionType.encode: {
        return entities.encode(src);
      }

      case DefaultActionType.decode: {
        return entities.decode(src);
      }

      default: return '';
    }
  }

  title(): string {
    return 'XML';
  }
}
