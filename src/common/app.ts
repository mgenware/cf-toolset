import './app.css';
const LS = require('../ls/ls');

export class App {
  // Localized strings
  // tslint:disable-next-line no-any
  ls: any;

  constructor() {
    this.ls = this.localizedMap(LS);
  }

  browserLang(): string {
    return window.navigator.language;
  }

  // tslint:disable-next-line no-any
  private localizedMap(src: any): any {
    const lang = this.browserLang();
    if (lang.toLowerCase() === 'zh-cn') {
      return src.cn || {};
    }
    return src.en || {};
  }
}

export default new App();
