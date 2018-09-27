<template>
<div>
  <label class="label">{{label || $ls.data}}</label>
  <textarea
    class="editor"
    rows="10"
    @input="$emit('update:content', $event.target.value)"
  />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CodeEditor extends Vue {
  @Prop() content!: string;
  @Prop() label!: string;
}
</script>

<style scoped>
.editor {
  font-size: 15px;
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  width: 100%;
}
</style>
