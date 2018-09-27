<template>
<div class="content">
  <h2>{{$ls.URLUnicodeTransformer}}</h2>
  <CodeEditor :content.sync="input" />

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
