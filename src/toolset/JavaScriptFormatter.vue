<template>
<div>
  <PrettierFormatter
    :title="$ls.JavaScriptFormatter"
    :opts="opts"
    :coreOpts="coreOpts"
    lang="javascript"
  />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PrettierFormatter from './internals/PrettierFormatter.vue';
// tslint:disable-next-line
const plugins = [require('prettier/parser-babylon')];

@Component({
  components: {
    PrettierFormatter,
  },
})
export default class JavaScriptFormatter extends Vue {
  opts = {
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
  };

  coreOpts = {
    parser: 'babylon',
    plugins,
  };
}
</script>
