<template>
<div>
  <PrettierFormatter
    :title="$ls.JSONFormatter"
    :opts="opts"
    :coreOpts="coreOpts"
    lang="json"
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
export default class JSONFormatter extends Vue {
  opts = {
    printWidth: 80,
    tabWidth: 2,
  };

  coreOpts = {
    parser: 'json',
    plugins,
  };
}
</script>
