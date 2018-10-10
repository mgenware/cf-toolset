<template>
<div class="content">
  <h2>{{$ls.ColorPickerConverter}}</h2>
  <p>
    <a ref="color_picker_area"
      :style="{ width: '100px' }"
      class="button is-white">
    </a>
  </p>
  <InlineCodeView label="HEX(RGB)" :content="hex" /> <br/>
  <InlineCodeView label="HEX(RGBA)" :content="hexa" /> <br/>
  <InlineCodeView label="RGB" :content="rgb" /> <br/>
  <InlineCodeView label="RGBA" :content="rgba" /> <br/>
  <InlineCodeView label="HSL" :content="hsl" /> <br/>
  <InlineCodeView label="HSLA" :content="hsla" /> <br/>
  <InlineCodeView label="RGBA" :content="nRGBA" /> <br/>
  <InlineCodeView label="HSLA" :content="nHSLA" /> <br/>
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
  rgba = '';
  hsl = '';
  hsla = '';
  hex = '';
  hexa = '';
  nRGBA = '';
  nHSLA = '';

  mounted() {
    const parent = this.$refs.color_picker_area as HTMLDivElement;
    const picker = new ColorPicker({
      parent,
      color: 'gray',
      onChange: (color: any) => {
        parent.style.background = color.rgbaString;
        this.rgb = color.rgbString;
        this.rgba = color.rgbaString;
        this.hsl = color.hslString;
        this.hsla = color.hslaString;
        this.hexa = color.hex;
        if (this.hexa && this.hexa.length >= 7) {
          this.hex = this.hexa.substr(0, 7);
        }
        this.nRGBA = color.rgba.join(', ');
        this.nHSLA = color.hsla.join(', ');
      },
    });
  }
}
</script>
