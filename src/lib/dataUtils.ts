export function formatJSONObject(value: any): string {
  return JSON.stringify(value, null, 2);
}
