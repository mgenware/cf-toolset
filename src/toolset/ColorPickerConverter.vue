<template>
<div class="content">
  <h2>{{$ls.ColorPickerConverter}}</h2>
  <p>
    <a ref="color_picker_area"
      :style="{ width: '100px' }"
      class="button is-white">
    </a>
  </p>
  <InlineCodeView label="RGB" :content="rgb" />
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import InlineCodeView from '@/views/InlineCodeView.vue';
// tslint:disable-next-line
const ColorPicker = require('vanilla-picker').default;

@Component({
  components: {
    InlineCodeView,
  },
})
export default class ColorPickerConverter extends Vue {
  rgb = '';

  mounted() {
    const parent = this.$refs.color_picker_area as HTMLDivElement;
    const picker = new ColorPicker({
      parent,
      color: 'gray',
      onChange: (color: any) => {
        parent.style.background = color.rgbaString;
        this.rgb = color.rgbString;
      },
    });
  }
}
</script>
