<template>
<div>
  <label class="label">{{label || $ls.output}}</label>
  <pre ref="pre"><code>{{content}}</code></pre>
  <button
    class="button is-light"
    @click="handleCopy"
    :disabled="copyDone"
  >
    {{copyDone ? $ls.copied : $ls.copy}}
  </button>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ls from '@/ls';

@Component
export default class CodeView extends Vue {
  @Prop() content!: string;
  @Prop() label!: string;

  preElement!: HTMLPreElement;
  copyDone = false;

  mounted() {
    this.preElement = this.$refs.pre as HTMLPreElement;
  }

  async handleCopy() {
    const { content } = this;
    if (!content) {
      return;
    }

    try {
      // avoid the clipboard not found on navigator error
      const navigatorObj = navigator as any;
      await navigatorObj.clipboard.writeText(content);
      this.copyDone = true;
      setTimeout(() => this.copyDone = false, 1200);
    } catch (ex) {
      alert(ls.copyNotSupported);
    }
  }
}
</script>
