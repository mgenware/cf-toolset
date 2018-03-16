import { BaseActionView } from 'common/baseActionView';
import { Fx23StringReader } from 'fx23';
import app from 'common/app';

enum ActionType {
  uppercase, lowercase, capitalized, sentence,
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

      case ActionType.capitalized: {
        return this.toCapitalized(src);
      }

      case ActionType.sentence: {
        return this.toSentenceCase(src);
      }

      default: return '';
    }
  }

  actionNames(): string[] {
    const { ls } = this;
    return [ls.uppercase, ls.lowercase, ls.capitalized, ls.sentence];
  }

  title(): string {
    return app.localizedMap(localizedStrings()).title;
  }

  private toCapitalized(src: string): string {
    const reader = new Fx23StringReader(src);
    let res = '';
    while (reader.hasNext()) {
      // ignore non-letters
      res += reader.collectWhile((c) => !c.match(/[a-z]/i));
      if (reader.hasNext()) {
        res += reader.next().toUpperCase();
        res += reader.collectWhile((c) => c.trim() !== '');
      }
    }
    return res;
  }

  private toSentenceCase(src: string): string {
    const reader = new Fx23StringReader(src);
    let res = '';
    while (reader.hasNext()) {
      // ignore non-letters
      res += reader.collectWhile((c) => !c.match(/[a-z]/i));
      if (reader.hasNext()) {
        res += reader.next().toUpperCase();
        res += reader.collectWhile((c) => c.trim() !== '.');
        // jump over the . if needed
        res += reader.next();
      }
    }
    return res;
  }
}

function localizedStrings(): { [id1: string]: { [id2: string]: string; }; } {
  return {
    en: {
      uppercase: 'UPPERCASE',
      lowercase: 'lowercase',
      capitalized: 'Capitalized Case',
      sentence: 'Sentence Case',
    },
  
    cn: {
      uppercase: '大小',
      lowercase: '小写',
      capitalized: '首字母大写',
      sentence: '每句首字母大写',
    }
  };
}
