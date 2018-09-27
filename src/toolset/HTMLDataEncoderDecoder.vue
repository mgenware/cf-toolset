<template>
<div class="content">
  <h2>{{$ls.HTMLDataEncoderDecoder}}</h2>
  <CodeEditor :content.sync="input" />

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
import { AllHtmlEntities } from 'html-entities';
const entities = new AllHtmlEntities();

@Component({
  components: {
    CodeEditor, CodeView,
  },
})
export default class HTMLDataEncoderDecoder extends Vue {
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
