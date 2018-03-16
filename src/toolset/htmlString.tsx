import { BaseActionView, DefaultActionType } from 'common/baseActionView';
import { AllHtmlEntities } from 'html-entities';
const entities = new AllHtmlEntities();

export default class HTMLString extends BaseActionView {
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
    return 'HTML';
  }
}
