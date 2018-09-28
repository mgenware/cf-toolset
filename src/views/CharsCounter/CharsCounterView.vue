<template>
<div class="root">
  <div class="col">{{$ls.chars}}: {{info.chars}}</div>
  <div class="col">{{$ls.charsNoSpaces}}: {{info.charsNoSpaces}}</div>
  <div class="col">{{$ls.lines}}: {{info.lines}}</div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CharsCounterData from './CharsCounterData';

@Component
export default class CharsCounterView extends Vue {
  @Prop() info!: CharsCounterData;
}
</script>

<style scoped>
.root {
  border-left: 4px solid navy;
  padding-left: 4px;
  display: flex;
  font-size: small;
  margin-bottom: 20px;
  margin-top: 10px;
}

.col {
  flex: 1 1 0;
}
</style>
