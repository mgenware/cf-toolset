<template>
<div class="content">
  <h2>{{$ls.ColorPickerConverter}}</h2>
  <div ref="color_picker_area" :style="{ width: '100px' }">Click</div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
// tslint:disable-next-line
const ColorPicker = require('vanilla-picker').default;

@Component
export default class ColorPickerConverter extends Vue {
  mounted() {
    const area = this.$refs.color_picker_area as HTMLDivElement;
    const picker = new ColorPicker(area);
    picker.onChange = (color: any) => {
        area.style.background = color.rgbaString;
    };
  }
}
</script>
