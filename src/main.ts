import './ls/inject_en';
import 'bulma/css/bulma.css';
import './core_entry';
import bulmaSetup from './bulmaSetup';

function ready(fn: () => void) {
  const doc = document as any;
  if (doc.attachEvent ? doc.readyState === 'complete' : doc.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(() => {
  try {
    bulmaSetup();
  } catch (ex) {
    // tslint:disable-next-line no-console
    console.log(`Bulma setup failed, ${ex.message}`);
  }
});
