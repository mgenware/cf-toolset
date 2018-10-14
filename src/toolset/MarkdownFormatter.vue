<template>
<div>
  <PrettierFormatter
    :title="$ls.MarkdownFormatter"
    :opts="opts"
    :coreOpts="coreOpts"
    lang="css"
  />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PrettierFormatter from './internals/PrettierFormatter.vue';
// tslint:disable-next-line
const plugins = [require('prettier/parser-markdown')];

@Component({
  components: {
    PrettierFormatter,
  },
})
export default class MarkdownFormatter extends Vue {
  opts = {
    printWidth: 80,
    tabWidth: 2,
  };

  coreOpts = {
    parser: 'markdown',
    plugins,
  };
}
</script>
