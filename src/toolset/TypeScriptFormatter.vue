<template>
<div>
  <PrettierFormatter
    :title="$ls.TypeScriptFormatter"
    :opts="opts"
    :coreOpts="coreOpts"
    lang="typescript"
  />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PrettierFormatter from './internals/PrettierFormatter.vue';
// tslint:disable-next-line
const plugins = [require('prettier/parser-typescript')];

@Component({
  components: {
    PrettierFormatter,
  },
})
export default class TypeScriptFormatter extends Vue {
  opts = {
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
  };

  coreOpts = {
    parser: 'typescript',
    plugins,
  };
}
</script>
