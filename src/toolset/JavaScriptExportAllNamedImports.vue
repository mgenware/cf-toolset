<template>
<div class="content">
  <h2>{{$ls.JavaScriptExportAllNamedImports}}</h2>
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
    <button class="button is-primary" @click="handleExtract">{{$ls.extract}}</button>
  </div>

  <CodeView :content="result" />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CodeEditor from '@/views/CodeEditor.vue';
import CodeView from '@/views/CodeView.vue';
import { splitLines } from '@/lib/dataUtils';

@Component({
  components: {
    CodeEditor, CodeView,
  },
})
export default class JavaScriptExportAllNamedImports extends Vue {
  @Prop() content!: string;

  input = '';
  result = '';

  exampleSrc = `const privateVar = 123;
export const publicVar = 123;
function privateFunc(x, y) {
  return x + y;
}
export function publicFunc(x, y) {
  return x + y;
}
export class Type {
}`;
  exampleDest = `export { Type, publicFunc, publicVar } from 'FILE_NAME';`;

  private handleExtract() {
    const { input } = this;
    if (!input) {
      return '';
    }

    const set = new Set<string>();
    const regex = /export (\w+ )?(\w+)\b/g;
    for (const str of splitLines(input)) {
      const match = regex.exec(str);
      // We only need first match
      if (match != null && match.length >= 2) {
        set.add(match[2]);
      }
    }

    const members = [...set].sort();
    // Insert newlines when member.length >= 5
    if (members.length >= 5) {
      let s = '';
      for (const m of members) {
        s += `  ${m},\n`;
      }
      this.result = `export {\n${s}} fron 'FILE_NAME';`;
    } else {
      this.result = `export { ${members.join(', ')} } from 'FILE_NAME';`;
    }
  }
}
</script>
