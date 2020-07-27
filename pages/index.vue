<template>
  <div class="main container">
  
    <div class="welcome">
      
    </div>
    <div class="code-wrap">
      <div class="html-code">
        <CssCodePrism :documentTitle="documentTitle" />
        
      </div>
      <div class="css-code">
        <HtmlCodePrism :documentTitle="documentTitle" />
      </div>
    </div>
  </div>
</template>

<script>
import PageTemplate from "../components/PageTemplate.vue";
import HtmlCodePrism from "../components/HtmlCodePrism.vue";

export default {
  name: "App",
  components: {
    PageTemplate,
    HtmlCodePrism,
  },
  data() {
    return {
      documentTitle: "",
    };
  },
};
</script>

<style scoped>

.welcome {
  width: 100%;
  height: 500px;
  
}
.wrap {
  width: 100%;
  display: flex;
  min-height: 100vh;
  
}

</style>
