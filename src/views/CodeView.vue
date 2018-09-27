<template>
<div>
  <label class="label">{{label || $ls.output}}</label>
  <pre><code>{{content}}</code></pre>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CodeView extends Vue {
  @Prop() content!: string;
  @Prop() label!: string;
}
</script>
