<template>
<div class="content">
  <h2>{{$ls.CharacterLineCounter}}</h2>
  <CodeEditor />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import CodeEditor from '@/views/CodeEditor.vue';

@Component({
  components: {
    CodeEditor,
  },
})
export default class CharacterLineCounter extends Vue {
}
</script>
