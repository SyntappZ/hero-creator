<template>
  <div class="colors slidePosition">
    <div class="checkbox">
      <Checkbox label="dark mode" id="darkMode" />
    </div>
    <div class="color-wrap">
      <div class="color-picker">
        <h4>Primary Color</h4>
        <Chrome :value="colors" @input="changePrimaryColor"></Chrome>
      </div>
      <div class="color-picker">
        <h4>Secondary Color</h4>
        <Chrome :value="colors" @input="changeSecondaryColor"></Chrome>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Chrome } from "vue-color";

import Checkbox from "../Checkbox.vue";
import Button from "../Button.vue";
export default {
  props: ["title"],
  components: {
    Button,

    Checkbox,
    Chrome,
  },
  data() {
    return {
      colors: "#5f1735",
    };
  },
  methods: {
    changePrimaryColor({ hex }) {
      const payload = { name: "linkColor", color: hex };
      this.updateColor(payload);
    },
    changeSecondaryColor({ hex }) {
      const payload = { name: "mainSecondaryColor", color: hex };

      this.updateColor(payload);
    },
    ...mapActions("prismStore", ["updateColor"]),
  },
  computed: {
    ...mapState("dataStore", ["currentSection", "sections"]),
  },
};
</script>

<style scoped>
.colors {
 
  width: 100%;
}
.color-wrap {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.checkbox {
 
}
h4 {
  padding: 5px 0;
}
</style>