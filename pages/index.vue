<template>
  <div class="main container">
    <div class="setup-wrap">
      <div class="selector-wrap">
        <Selector />
      </div>
      <div class="sections-wrap">
        <SectionsContainer />
      </div>
    </div>
    <div class="code-wrap">
      <div class="code">
        <HtmlCodePrism :documentTitle="documentTitle" />
      </div>
      <div class="code">
        <CssCodePrism :documentTitle="documentTitle" />
      </div>
    </div>
  </div>
</template>

<script>
import CssCodePrism from "../components/CssCodePrism.vue";
import HtmlCodePrism from "../components/HtmlCodePrism.vue";
import Selector from "../components/Selector.vue";
import SectionsContainer from "../components/SectionsContainer.vue";

export default {
  name: "App",
  components: {
    CssCodePrism,
    HtmlCodePrism,
    Selector,
    SectionsContainer,
  },
  data() {
    return {
      documentTitle: "",
    };
  },
};
</script>

<style scoped>
.setup-wrap {
  width: 100%;
  padding: 70px 0;
  display: flex;
}
.code-wrap {
  width: 100%;
  display: flex;
  min-height: 100vh;
}

.selector-wrap,
.section-wrap {
  width: 100%;
}

.code {
  width: 100%;
}
</style>
