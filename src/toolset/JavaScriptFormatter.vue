<template>
<div class="content">
  <h2>{{$ls.JavaScriptFormatter}}</h2>
  <CodeEditor :content.sync="input" />
  <PrettierOpts ref="opts" :defaults="opts" />

  <div class="buttons m-t-md">
    <button class="button is-primary" @click="handleFormat">{{$ls.prettify}}</button>
  </div>

  <CodeView :content="result" />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CodeEditor from '@/views/CodeEditor.vue';
import CodeView from '@/views/CodeView.vue';
import PrettierOpts from './internals/PrettierOpts.vue';
// tslint:disable-next-line
const prettier = require('prettier/standalone');
// tslint:disable-next-line
const plugins = [require('prettier/parser-babylon')];
import { formatJSONObject } from '@/lib/dataUtils';

@Component({
  components: {
    CodeEditor, CodeView, PrettierOpts,
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

  input = '';
  result = '';

  handleFormat() {
    const opts = (this.$refs.opts as PrettierOpts).getOptions();
    if (!opts) {
      return;
    }
    if (!this.input) {
      this.result = '';
      return;
    }

    Object.assign(opts, this.coreOpts);
    this.result = prettier.format(this.input, opts);
  }
}
</script>
