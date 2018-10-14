<template>
<details>
  <summary class="is-size-4">{{$ls.options}} <a href="https://prettier.io/docs/en/options.html" target="_blank">[{{$ls.docs}}]</a></summary>
  <CodeEditor label="" :content.sync="internalContent" :disableCharInfo="true" />
  <button class="button is-small is-light" @click="handleReset">{{$ls.reset}}</button>
</details>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CodeEditor from '@/views/CodeEditor.vue';
import ls from '@/ls';
import { formatJSONObject } from '@/lib/dataUtils';
import { error } from '@/lib/alert';

@Component({
  components: {
    CodeEditor,
  },
})
export default class PrettierOpts extends Vue {
  @Prop() defaults!: any;
  internalContent = '';

  mounted() {
    this.handleReset();
  }

  getOptions(): any {
    try {
      return JSON.parse(this.internalContent);
    } catch (ex) {
      error(`${ls.invalidOptsJSON}: ${ex.message}`);
      return null;
    }
  }

  private handleReset() {
    this.internalContent = formatJSONObject(this.defaults);
  }
}
</script>
