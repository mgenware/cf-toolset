<template>
<div class="content">
  <h2>{{title}}</h2>
  <CodeEditor :content.sync="input" />
  <PrettierOpts ref="opts" :defaults="opts" />

  <div class="buttons m-t-md">
    <button class="button is-primary" @click="handleFormat">{{$ls.prettify}}</button>
  </div>

  <CodeView :content="result" :lang="lang" />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';
import CodeEditor from '@/views/CodeEditor.vue';
import CodeView from '@/views/CodeView.vue';
import PrettierOpts from './PrettierOpts.vue';
// tslint:disable-next-line
const prettier = require('prettier/standalone');
import { formatJSONObject } from '@/lib/dataUtils';
import { error } from '@/lib/alert';

@Component({
  components: {
    CodeEditor, CodeView, PrettierOpts,
  },
})
export default class PrettierFormatter extends Vue {
  @Prop() title!: string;
  @Prop() opts!: any;
  @Prop() coreOpts!: any;
  @Prop() lang!: string;

  input = '';
  result = '';

  handleFormat() {
    try {
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
    } catch (ex) {
      error(ex.message);
    }
  }
}
</script>
