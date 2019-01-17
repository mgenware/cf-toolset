<template>
  <section class="section">
    <div class="container">
      <div class="content">
        <h3>
          <a href="https://coldfunction.com/toolset">ColdFunction ToolSet</a>
        </h3>
        <hr>
      </div>

      <div class="columns">
        <div class="column is-narrow">
          <p v-for="r in routes" :key="r.file">
            <router-link :to="r.file">{{r.name}}</router-link>
          </p>
        </div>
        <div class="column">
          <router-view/>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import rawRoutes from './routes.json';
import ls from '@/ls';

@Component
export default class DevApp extends Vue {
  routes = rawRoutes.routes
    .map((r: any) => {
      const [name, file] = r;
      return { name: ls[name], file };
    })
    .sort((a: any, b: any) =>
      a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }),
    );
}
</script>
