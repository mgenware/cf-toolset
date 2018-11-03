export function formatJSONObject(value: any): string {
  return JSON.stringify(value, null, 2);
}

export function splitLines(s: string): string[] {
  if (!s) {
    return [];
  }
  return s.split(/\r?\n/);
}
