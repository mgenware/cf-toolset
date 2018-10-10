<template>
<span>
  {{label || $ls.output}}
  <code ref="code" class="m-l-sm">{{content}}</code>
  <button
    class="button is-small is-light m-l-sm"
    @click="handleCopy"
    :disabled="copyDone"
  >
    {{copyDone ? $ls.copied : $ls.copy}}
  </button>
</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ls from '@/ls';
import { copyHelper } from '@/lib/clipboard';

@Component
export default class InlineCodeView extends Vue {
  @Prop() content!: string;
  @Prop() label!: string;

  codeElement!: HTMLSpanElement;
  copyDone = false;

  mounted() {
    this.codeElement = this.$refs.code as HTMLSpanElement;
  }

  async handleCopy() {
    const { content } = this;
    if (!content) {
      return;
    }
    copyHelper(content, () => {
      this.copyDone = true;
      setTimeout(() => this.copyDone = false, 1200);
    });
  }
}
</script>
