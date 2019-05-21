import ls from '../ls';

export async function copyHelper(content: string, cb: (() => void) | null) {
  try {
    // avoid the clipboard not found on navigator error
    const navigatorObj = navigator as any;
    await navigatorObj.clipboard.writeText(content);
    if (cb) {
      cb();
    }
  } catch (ex) {
    alert(ls.copyNotSupported);
  }
}
