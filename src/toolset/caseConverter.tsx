import { BaseActionView } from 'common/baseActionView';
import app from 'common/app';

enum ActionType {
  uppercase, lowercase, capitalized
}

export default class CaseConverter extends BaseActionView {
  private ls: {[id: string]: string} = app.localizedMap(localizedStrings());

  handleAction(index: number, src: string): string {
    switch (index) {
      case ActionType.uppercase: {
        return src.toUpperCase();
      }

      case ActionType.lowercase: {
        return src.toLowerCase();
      }

      default: return '';
    }
  }

  actionNames(): string[] {
    const { ls } = this;
    return [ls.uppercase, ls.lowercase, ls.capitalized];
  }

  title(): string {
    return app.localizedMap(localizedStrings()).title;
  }
}

function localizedStrings(): { [id1: string]: { [id2: string]: string; }; } {
  return {
    en: {
      uppercase: 'UPPERCASE',
      lowercase: 'lowercase',
      capitalized: 'Capitalized Case',
    },
  
    cn: {
      uppercase: '大小',
      lowercase: '小写',
      capitalized: '首字母大写',
    }
  };
}
