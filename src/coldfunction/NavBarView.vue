<template>
<div id="m_nav_menu" class="navbar-menu">
  <div class="navbar-end">
    <a class="navbar-item" href="/toolset">{{$ls.toolSet}}</a>

    <a v-if="user" class="navbar-item" :href="user.profileURL">
      <img alt="" :src="user.avatarURL" width="20" height="20" class="border-radius-10 vertical-align-middle" />
      <span class="m-l-sm">{{user.nick}}</span>
      <BadgeView :value="`${user.badge}`"/>
    </a>
    <a v-else :href="signInURL" class="navbar-item">
      <img src="/static/img/user/login.svg" width="16" height="16" />
      <span class="m-l-sm">{{$ls.signIn}}</span>
    </a>
  
    <a class="navbar-item" href="https://github.com/mgenware/cf-toolset/issues/new" target="_blank">{{$ls.feedback}}</a>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import User from './User';
import BadgeView from './BadgeView.vue';
import ls from '@/ls';

@Component({
  components: {
    BadgeView,
  },
})
export default class NavBarView extends Vue {
  user = User.loadFromWindow();
  signInURL = '/auth/in';
}
</script>
