<template>
  <div class="buttons slidePosition">
    <div class="checkbox-wrap">
      <div class="checkbox">
        <Checkbox label="fill button" :checkboxState="buttonFill" stateId="buttonFill" />
      </div>
      <div class="checkbox">
        <Checkbox label="uppercase" :checkboxState="buttonUpperCase" stateId="buttonUpperCase" />
      </div>
    </div>

    <div class="bottom-wrap">
      <div class="button-wrap">
        <PreviewBtn />
      </div>
      <Slider
        :updateSliderState="updateButtonRadius"
        title="border radius"
        :h5value="`border-radius: ${this.buttonRadius}`"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import PreviewBtn from "../previewComponents/PreviewBtn.vue";
import Checkbox from "../Checkbox.vue";
import Slider from "../Slider.vue";
export default {
  components: {
    PreviewBtn,
    Slider,
    Checkbox,
  },
  methods: {
    ...mapActions("prismStore", ["updateButtonRadius"]),
  },
  computed: {
    ...mapState("prismStore", ["buttonRadius", "buttonFill", "buttonUpperCase"]),
  },
};
</script>

<style scoped>
.buttons {
  width: 100%;
  display: flex;
}
.checkbox-wrap {
  flex: 2;
}
.bottom-wrap {
  flex: 5;
  
}
.button-wrap {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox {
  padding: 5px 0;
}
</style>