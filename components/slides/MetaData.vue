<template>
  <div class="meta-data slidePosition">
    <InputData placeholder="Document/Main Title" id="documentTitle" />
    <InputData placeholder="Description" id="description" />
    <InputData placeholder="Author" id="author" />
    <InputData placeholder="keywords seperate with commas" id="keywords" />

    <Slider
      :updateSliderState="updatePageWrapper"
      title="Page Wrapper"
      :h5value="`max-width: ${this.pageWrapper}`"
    />
  </div>
</template>

<script>
import InputData from "../InputData.vue";
import Slider from "../Slider.vue";
import { mapActions, mapState } from "vuex";
export default {
  props: ["title"],
  components: {
    InputData,
    Slider,
  },
  data() {
    return {
      sliderValue: 0,
    };
  },
  methods: {
    ...mapActions("metaDataStore", ["updatePageWrapper"]),
  },
  computed: {
    ...mapState("metaDataStore", ["pageWrapper"]),
  },
};
</script>

<style scoped>
.meta-data {
  width: 100%;
}

</style>