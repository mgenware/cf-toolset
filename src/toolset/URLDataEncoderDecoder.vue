<template>
<div class="content">
  <h2>{{$ls.URLDataEncoderDecoder}}</h2>
  <blockquote>
    <p>{{$ls.examples}}</p>
    <p><code>😃🙉</code> <kbd>{{$ls.encode}}</kbd> <code>%F0%9F%98%83%F0%9F%99%89</code></p>
    <p><code>%F0%9F%98%83%F0%9F%99%89</code> <kbd>{{$ls.decode}}</kbd> <code>😃🙉</code></p>
  </blockquote>
  <CodeEditor autofocus :content.sync="input" />

  <div class="buttons">
    <button class="button is-primary" @click="handleEncode">{{$ls.encode}}</button>
    <button class="button is-primary" @click="handleDecode">{{$ls.decode}}</button>
  </div>

  <CodeView :content="result" />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CodeEditor from '@/views/CodeEditor.vue';
import CodeView from '@/views/CodeView.vue';

@Component({
  components: {
    CodeEditor, CodeView,
  },
})
export default class URLDataEncoderDecoder extends Vue {
  @Prop() content!: string;

  input = '';
  result = '';

  handleEncode() {
    this.result = encodeURIComponent(this.input);
  }

  handleDecode() {
    this.result = decodeURIComponent(this.input);
  }
}
</script>
