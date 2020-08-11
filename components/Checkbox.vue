<template>
  <div class="check-box">
    <input type="checkbox" id="checkbox" :checked="checkboxState" @change="handleCheckbox" />
    <label for="checkbox">{{ label }}</label>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["label", "stateId", "checkboxState"],
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    ...mapActions("metaDataStore", ["updateCheckbox"]),
    handleCheckbox() {
      this.updateCheckbox(this.stateId);
    },
  },

  // watch: {
  //     checked() {

  //         this.updateCheckbox(this.stateId)
  //     }
  // }
//   computed: {
//       checked() {
//           return this.checkboxState
//       }
//   }
};
</script>

<style scoped>
.check-box {
  padding: 10px 0;
}
</style>