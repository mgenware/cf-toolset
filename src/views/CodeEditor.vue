<template>
<div>
  <label v-if="label" class="label">{{label}}</label>
  <textarea
    class="editor"
    rows="10"
    v-model="internalContent"
    @input="handleInputChange"
    :style="{ padding: '8px' }"
  />
  <CharsCounterView v-if="!disableCharInfo" :info="charsInfo" />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
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
  @Prop({ default: false }) disableCharInfo!: boolean;

  charsInfo = CharsCounterData.count('');
  internalContent = this.content;

  handleInputChange(e: any) {
    const text = e.target.value;
    this.$emit('update:content', text);
    if (!this.disableCharInfo) {
      this.charsInfo = CharsCounterData.count(text);
    }
  }
  
  @Watch('content')
  onContentChanged(val: string) {
    this.internalContent = val;
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
