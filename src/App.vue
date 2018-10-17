<template>
<section class="section">
  <div class="container">
    <div v-if="$root.loading" :style="{ display: 'flex', justifyContent: 'center', marginTop: '90px' }">
      <fulfilling-bouncing-circle-spinner
        :animation-duration="4000"
        :size="100"
        color="#888db4"
      />
    </div>
    <router-view v-else />
  </div>
</section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// tslint:disable-next-line
const { FulfillingBouncingCircleSpinner } = require('epic-spinners');

@Component({
  components: {
    FulfillingBouncingCircleSpinner,
  },
})
export default class App extends Vue {
}
</script>
