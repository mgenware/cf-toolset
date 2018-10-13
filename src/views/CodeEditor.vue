<template>
<div>
  <label class="label">{{label || $ls.data}}</label>
  <textarea
    class="editor"
    rows="10"
    @input="handleInputChange"
    :style="{ padding: '8px' }"
  />
  <CharsCounterView :info="charsInfo" />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CharsCounterView from '@/views/CharsCounter/CharsCounterView.vue';
import CharsCounterData from '@/views/CharsCounter/CharsCounterData';

@Component({
  components: {
    CharsCounterView,
  },
})
export default class CodeEditor extends Vue {
  @Prop() content!: string;
  @Prop() label!: string;
  charsInfo = CharsCounterData.count('');

  handleInputChange(e: any) {
    const text = e.target.value;
    this.$emit('update:content', text);
    this.charsInfo = CharsCounterData.count(text);
  }
}
</script>

<style scoped>
.editor {
  font-size: 15px;
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  width: 100%;
}
</style>
