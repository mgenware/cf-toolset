export default class CharsCounterData {
  static count(s?: string): CharsCounterData {
    if (!s) {
      return new CharsCounterData(0, 0, 0);
    }

    const chars = s.length;
    let spaces = 0, lines = 0;
    for (let i = 0; i < chars; i++) {
      const c = s.charAt(i);
      if (/\s/.test(c)) {
        spaces++;
        if (c === '\n') {
          lines++;
        }
      }
    }
    lines++;

    return new CharsCounterData(chars, chars - spaces, lines);
  }

  constructor(
    public chars: number = 0,
    public charsNoSpaces: number = 0,
    public lines: number = 0,
  ) {}
}
