import { BasePrettier } from 'common/basePrettier';
import * as prettier from 'prettier';

export default class JSPrettier extends BasePrettier {
  languageName(): string {
    return 'JavaScript';
  }

  prettierOpt(): prettier.Options {
    return {
      parser: 'babylon',
    };
  }
}
