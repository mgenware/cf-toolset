<template>
<div class="content">
  <h2>{{$ls.JSONMinifier}}</h2>
  <blockquote>
    <p>{{$ls.examples}}</p>
    <p>
      <CodeView :content="exampleSrc" lang="javascript" :hideCopyButton="true" label="" />
    </p>
    <p><kbd>{{$ls.decode}}</kbd></p>
    <p>
      <CodeView :content="exampleDest" lang="javascript" :hideCopyButton="true" label="" />
    </p>
  </blockquote>
  <CodeEditor autofocus :content.sync="input" />

  <div class="buttons">
    <button class="button is-primary" @click="handleMinify">{{$ls.minify}}</button>
  </div>

  <CodeView :content="result" lang="json" />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CodeEditor from '@/views/CodeEditor.vue';
import CodeView from '@/views/CodeView.vue';
import { error } from '@/lib/alert';

@Component({
  components: {
    CodeEditor, CodeView,
  },
})
export default class JSONMinifier extends Vue {
  @Prop() content!: string;

  input = '';
  result = '';
  exampleSrc = `{
  "emoji": "\\uD83D\\uDE49\\uD83E\\uDD90",
  "list": [1, 2, 3, 4]
}`;
  exampleDest = `{"emoji":"🙉🦐","list":[1,2,3,4]}`;

  handleMinify() {
    try {
      this.result = JSON.stringify(JSON.parse(this.input), null);
    } catch (ex) {
      error(ex.message);
    }
  }
}
</script>
