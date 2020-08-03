<template>
  <div class="slider-wrap">
    <div class="wrapper-width">
      <h4>{{ title }}</h4>
      <h5>{{ h5value }}</h5>
    </div>
    <vue-slider v-model="sliderValue" />
  </div>
</template>

<script>
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
import "vue-slider-component/dist-css/vue-slider-component.css";
import "vue-slider-component/theme/default.css";
import { mapActions, mapState } from "vuex";

export default {
  props: ["title", "updateSliderState", "h5value"],
  components: {
    VueSlider,
  },
   data() {
    return {
      sliderValue: 0,
    };
  },
  methods: {
   
  },
  watch: {
    sliderValue() {
      this.updateSliderState(this.sliderValue)
    },
  },
};
</script>

<style scoped>
.wrapper-width {
  display: flex;
  justify-content: space-between;
}
.slider-wrap {
  width: 300px;
  margin: auto;
}
h4,
h5 {
  padding: 10px 0;
  color: rgb(100, 100, 100);
}
</style>