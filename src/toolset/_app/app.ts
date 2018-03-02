export class App {
  browserLang(): string {
    return window.navigator.language;
  }

  localizedDic(src: { [id1: string]: { [id2: string]: string; }; }): { [id: string]: string; } {
    const lang = this.browserLang();
    if (lang.toLowerCase() === 'zh-cn') {
      return src.cn;
    }
    return src.en;
  }
}

export default new App();
