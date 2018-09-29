<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://coldfunction.com">
          <img src="/static/img/main/cf4.png" height="25" width="159" alt="coldfunction.com" />
        </a>
      </div>
      <NavBarView />
    </nav>

    <section class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NavBarView from './coldfunction/NavBarView.vue';

@Component({
  components: {
    NavBarView,
  },
})
export default class App extends Vue {
}
</script>
