<template>
<section class="section">
  <div class="container">
    <router-view/>
  </div>
</section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>
