<template>
<pre><code>{{content}}</code></pre>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CodeView extends Vue {
  @Prop() content!: string;
}
</script>
