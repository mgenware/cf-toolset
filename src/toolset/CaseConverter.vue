<template>
<div class="content">
  <h2>{{$ls.CaseConverter}}</h2>
  <CodeEditor autofocus :content.sync="input" />

  <div class="buttons">
    <button class="button is-primary" @click="handleUpperCase">{{$ls.uppercaseBtn}}</button>
    <button class="button is-primary" @click="handleLowerCase">{{$ls.lowercaseBtn}}</button>
    <button class="button is-primary" @click="handleCapitalized">{{$ls.capitalizedBtn}}</button>
    <button class="button is-primary" @click="handleSentenceCase">{{$ls.sentenceCaseBtn}}</button>
  </div>

  <CodeView :content="result" />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CodeEditor from '@/views/CodeEditor.vue';
import CodeView from '@/views/CodeView.vue';
import { Fx23StringReader } from 'fx23';

@Component({
  components: {
    CodeEditor, CodeView,
  },
})
export default class CaseConverter extends Vue {
  @Prop() content!: string;

  input = '';
  result = '';

  handleUpperCase() {
    this.result = this.input.toUpperCase();
  }

  handleLowerCase() {
    this.result = this.input.toLowerCase();
  }

  handleCapitalized() {
    this.result = this.toCapitalized(this.input);
  }

  handleSentenceCase() {
    this.result = this.toSentenceCase(this.input);
  }

  private toCapitalized(src: string): string {
    const reader = new Fx23StringReader(src);
    let res = '';
    while (reader.hasNext()) {
      // ignore non-letters
      res += reader.collectWhile((c) => !c.match(/[a-z]/i));
      if (reader.hasNext()) {
        res += reader.next().toUpperCase();
        res += reader.collectWhile((c) => c.trim() !== '');
      }
    }
    return res;
  }

  private toSentenceCase(src: string): string {
    const reader = new Fx23StringReader(src);
    let res = '';
    while (reader.hasNext()) {
      // ignore non-letters
      res += reader.collectWhile((c) => !c.match(/[a-z]/i));
      if (reader.hasNext()) {
        res += reader.next().toUpperCase();
        res += reader.collectWhile((c) => c.trim() !== '.');
        // jump over the . if needed
        res += reader.next();
      }
    }
    return res;
  }
}
</script>
