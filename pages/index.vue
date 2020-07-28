<template>
  <div class="main container">
    <h2 class="title">{{section.title}}</h2>
    <p class="subtitle">{{section.sectionAmout}} sections</p>
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
        <h2 class="code-title">{{codeType}}</h2>
        <HtmlCodePrism :documentTitle="documentTitle" />
      </div>
      <div class="code">
        <h2 style="padding-left: 5px" class="code-title">{{codeType === 'vue' ? codeType : 'css'}}</h2>
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
import { mapState } from "vuex";
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
  computed: {
    ...mapState("dataStore", ["sections", "currentSection"]),
    ...mapState(["codeType"]),
    section() {
      return this.sections[this.currentSection - 1];
    },
  },
};
</script>

<style scoped>
.setup-wrap {
  width: 100%;
  display: flex;
}

.title {
  padding: 70px 0 0 0;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  font-size: 27px;
}

.code-title {
  padding: 70px 0 0 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 18px;
}
.subtitle {
  padding-bottom: 20px;
  color: #a5a5a5;
  font-weight: 500;
  text-transform: capitalize;
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
