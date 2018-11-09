<template>
<div>
  <label class="label">{{label === undefined ? $ls.output : label}}</label>
  <pre ref="pre"><code v-if="highlighted" :class="lang ? `language-${lang}` : ''" v-html="highlighted" /><code v-else>{{content}}</code></pre>
  <button
    v-if="!hideCopyButton"
    class="button is-small is-light m-t-sm"
    @click="handleCopy"
    :disabled="copyDone"
  >
    {{copyDone ? $ls.copied : $ls.copy}}
  </button>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import ls from '@/ls';
import { copyHelper } from '@/lib/clipboard';

@Component
export default class CodeView extends Vue {
  @Prop() content!: string;
  @Prop() label!: string;
  @Prop() lang!: string;
  @Prop() hideCopyButton!: boolean;

  preElement!: HTMLPreElement;
  copyDone = false;
  highlighted = '';

  mounted() {
    this.preElement = this.$refs.pre as HTMLPreElement;
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

  @Watch('content', { immediate: true })
  onContentChanged(val: string) {
    try {
      const wind = window as any;
      const Prism = wind.Prism;
      if (this.lang && Prism && Prism.highlightAll) {
        this.highlighted = Prism.highlight(this.content, Prism.languages[this.lang]);
      } else {
        this.highlighted = '';
      }
    } catch (_) {
      this.highlighted = '';
    }
  }
}
</script>
