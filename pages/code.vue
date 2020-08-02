<template>
  <div class="code-page container">
    <div class="code-wrap">
      <div class="code">
        <h2 class="code-title">{{codeType}}</h2>
        <HtmlCodePrism />
      </div>
      <div class="code">
        <h2 style="padding-left: 5px" class="code-title">{{codeType === 'vue' ? codeType : 'css'}}</h2>
        <CssCodePrism />
      </div>
    </div>
  </div>
</template>

<script>
import CssCodePrism from "../components/CssCodePrism.vue";
import HtmlCodePrism from "../components/HtmlCodePrism.vue";
import { mapState } from "vuex";
export default {
  components: {
    CssCodePrism,
    HtmlCodePrism,
  },
  computed: {
     ...mapState(["codeType"]),
     
  }
};
</script>

<style scoped>
.code-wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.code-title {
  padding: 70px 0 0 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 18px;
}
.code {
  flex: 1;
}
</style>