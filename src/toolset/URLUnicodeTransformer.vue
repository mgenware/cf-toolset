<template>
<div class="content">
  <h2>{{$ls.URLUnicodeTransformer}}</h2>
  <blockquote>
    <p>{{$ls.examples}}</p>
    <p><code>https://www.google.com/search?q=%F0%9F%98%83+%F0%9F%A5%9F%E4%BD%A0%E5%A5%BD</code><br/><kbd>{{$ls.encode}}</kbd><br/><code>https://www.google.com/search?q=😃+🥟你好</code></p>
    <br/>
    <p><code>https://www.google.com/search?q=😃+🥟你好</code><br/><kbd>{{$ls.decode}}</kbd><br/><code>https://www.google.com/search?q=%F0%9F%98%83+%F0%9F%A5%9F%E4%BD%A0%E5%A5%BD</code></p>
  </blockquote>
  <CodeEditor autofocus :content.sync="input" />

  <div class="buttons">
    <button class="button is-primary" @click="handleShow">{{$ls.showUnicodeChars}}</button>
    <button class="button is-primary" @click="handleHide">{{$ls.hideUnicodeChars}}</button>
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
export default class URLUnicodeTransformer extends Vue {
  @Prop() content!: string;

  input = '';
  result = '';

  handleHide() {
    this.result = encodeURI(this.input);
  }

  handleShow() {
    this.result = decodeURI(this.input);
  }
}
</script>
