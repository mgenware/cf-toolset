<template>
<div>
  <div class="field">
    <label class="label">{{$ls.data}}</label>
    <div class="control">
      <CodeEditor :content.sync="input" />
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-primary" @click="handleEncode">{{$ls.encode}}</button>
    </div>
    <div class="control">
      <button class="button is-primary" @click="handleDecode">{{$ls.decode}}</button>
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
