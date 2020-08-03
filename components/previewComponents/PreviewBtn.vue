<template>
  <div :class="buttonClass">button</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("prismStore", ["buttonFill"]),
    buttonClass() {
      
      return this.buttonFill ? "button-fill" : "button-border";
    },
  },
};
</script>

<style scoped>
.button-fill {
  display: inline-block;
  text-align: center;
  padding: 20px 50px;
  letter-spacing: 2px;
  color: white;
  border-radius: var(--buttonRadius);
  background: var(--mainPrimaryColor);
  text-transform: var(--buttonUpperCase);
  cursor: pointer;
  margin: 10px auto;
  font-family: var(--templateFont);
  font-weight: bold;
}
.button-border {
  display: inline-block;
  text-align: center;

  padding: 20px 50px;
  text-transform: capitalize;
  letter-spacing: 2px;
  color: var(--mainPrimaryColor);
  border-radius: var(--buttonRadius);
  border: solid 2px var(--mainPrimaryColor);
  text-transform: var(--buttonUpperCase);
  cursor: pointer;
  margin: 10px auto;
  font-family: var(--templateFont);
  font-weight: bold;
}
</style>