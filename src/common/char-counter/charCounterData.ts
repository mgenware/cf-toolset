export default class CharCounterData {
  static count(s?: string): CharCounterData {
    if (!s) {
      return new CharCounterData(0, 0, 0);
    }

    const chars = s.length;
    let spaces = 0,
      lines = 0;
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

    return new CharCounterData(chars, chars - spaces, lines);
  }

  constructor(
    public chars: number = 0,
    public charsNoSpaces: number = 0,
    public lines: number = 0,
  ) {}
}
