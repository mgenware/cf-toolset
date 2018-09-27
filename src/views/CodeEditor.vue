<template>
<div>
  <textarea
    v-model="content"
    rows="10"
    @change="$emit('update:title')"
  />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CodeEditor extends Vue {
  @Prop() content!: string;
}
</script>
