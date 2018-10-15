<template>
<div class="content">
  <h2>{{$ls.URLDataEncoderDecoder}}</h2>
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
import { XmlEntities } from 'html-entities';
const entities = new XmlEntities();

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
    this.result = entities.encode(this.input);
  }

  handleDecode() {
    this.result = entities.decode(this.input);
  }
}
</script>
