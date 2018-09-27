<template>
<div>
  <div class="field">
    <label class="label">{{$ls.urlData}}</label>
    <div class="control">
      <CodeEditor :content="input" />
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-primary">{{$ls.encode}}</button>
    </div>
    <div class="control">
      <button class="button is-primary">{{$ls.decode}}</button>
    </div>
  </div>

  <div class="field">
    <label class="label">{{$ls.output}}</label>
    <div class="control">
      <CodeView :content="result" />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CodeEditor from '@/views/CodeEditor.vue';
import CodeView from '@/views/CodeView.vue';

@Component
export default class URLEncoderDecoder extends Vue {
  @Prop() content!: string;

  input = '';
  result = '';
}
</script>
