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
      <button class="button is-primary" @click="handleShow">{{$ls.showUnicodeChars}}</button>
    </div>
    <div class="control">
      <button class="button is-primary" @click="handleHide">{{$ls.hideUnicodeChars}}</button>
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

@Component({
  components: {
    CodeEditor, CodeView,
  },
})
export default class URLUnicodeTranformer extends Vue {
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
