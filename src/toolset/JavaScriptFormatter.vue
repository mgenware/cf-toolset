<template>
<div class="content">
  <h2>{{$ls.JavaScriptFormatter}}</h2>
  <CodeEditor :content.sync="input" />

  <details>
    <summary class="is-size-4">{{$ls.options}} <a href="https://prettier.io/docs/en/options.html">[{{$ls.docs}}]</a></summary>
    <CodeEditor label="" :content.sync="optionJSON" :disableCharInfo="true" />
  </details>

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
// tslint:disable-next-line
const prettier = require('prettier/standalone');
// tslint:disable-next-line
const plugins = [require('prettier/parser-babylon')];
import { formatJSONObject } from '@/lib/dataUtils';

@Component({
  components: {
    CodeEditor, CodeView,
  },
})
export default class JavaScriptFormatter extends Vue {
  opts = {
    printWidth: 80,
    tabWidth: 2,
    singleQuote: true,
    parser: 'babylon',
    plugins,
  };

  input = '';
  result = '';
  optionJSON = formatJSONObject(this.opts);

  handleFormat() {
    if (!this.input) {
      this.result = '';
      return;
    }

    this.result = prettier.format(this.input, this.opts);
  }
}
</script>
