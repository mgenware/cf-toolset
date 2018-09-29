<template>
  <span v-if="value !== '' && value != '0'" class="m-l-xxs number has-background-danger has-text-white is-size-7 vertical-align-middle">{{value}}</span>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BadgeView extends Vue {
  @Prop() private value!: string;
}
</script>
