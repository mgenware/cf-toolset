<template>
<div class="content">
  <h2>{{$ls.DecodeUnicodeJSON}}</h2>
  <blockquote>
    <p>{{$ls.examples}}</p>
    <p><code>{&quot;emoji&quot;: &quot;\uD83D\uDE49\uD83E\uDD90&quot;}</code> <kbd>{{$ls.decode}}</kbd> <code>{ &quot;emoji&quot;: &quot;🙉🦐&quot; }</code></p>
  </blockquote>
  <CodeEditor autofocus :content.sync="input" />

  <div class="buttons">
    <button class="button is-primary" @click="handleDecode">{{$ls.decode}}</button>
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
export default class DecodeUnicodeJSON extends Vue {
  @Prop() content!: string;

  input = '';
  result = '';

  handleDecode() {
    try {
      this.result = JSON.stringify(JSON.parse(this.input), null, 4);
    } catch (ex) {
      error(ex.message);
    }
  }
}
</script>
