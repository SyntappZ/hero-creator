<template>
  <div class="button" :style="buttonStyle">button</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {},
  computed: {
    ...mapState("metaDataStore", ["buttonFill", "mainPrimaryColor", "buttonRadius", "buttonUpperCase"]),
    
    buttonStyle() {
      return {
        display: "inline-block",
        textAlign: "center",
        padding: "15px 50px",
        letterSpacing: "2px",
        color: this.buttonFill ? "white" : (this.mainPrimaryColor || '#333'),
        border: this.buttonFill ? null : `solid 2px ${this.mainPrimaryColor || '#333'}`,
        borderRadius: this.buttonRadius,
        background: this.buttonFill ? (this.mainPrimaryColor || '#333') : 'transparent',
        textTransform: this.buttonUpperCase ? "uppercase" : "capitalize",
        cursor: "pointer",
        margin: "10px auto",
        fontWeight: "bold",
      };
    },
  },
};
</script>

<style scoped>

</style>