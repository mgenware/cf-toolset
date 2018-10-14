<template>
<div>
  <PrettierFormatter
    :title="$ls.CSSFormatter"
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
const plugins = [require('prettier/parser-postcss')];

@Component({
  components: {
    PrettierFormatter,
  },
})
export default class CSSFormatter extends Vue {
  opts = {
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
  };

  coreOpts = {
    parser: 'postcss',
    plugins,
  };
}
</script>
