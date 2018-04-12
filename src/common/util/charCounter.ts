export class CharInfo {
  static count(s?: string): CharInfo {
    if (!s) {
      return new CharInfo(0, 0, 0);
    }

    let chars = s.length, spaces = 0, lines = 0;
    for (var i = 0; i < chars; i++) {
      let c = s.charAt(i);
      if (/\s/.test(c)) {
        spaces++;
        if (c === '\n') {
          lines++;
        }
      }
    }
    lines++;

    return new CharInfo(chars, chars - spaces, lines);
  }

  constructor(
    public chars: number = 0,
    public charsNoSpaces: number = 0,
    public lines: number = 0,
  ) {}
}
