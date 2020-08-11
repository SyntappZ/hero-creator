<template>
  <div class="html-code">
    <prism language="html" class="code">{{previewHtml}}</prism>
  </div>
</template>

<script>
import "prismjs/prism";
import "prismjs/themes/prism-okaidia.css";
import Prism from "vue-prism-component";
import { mapState, mapGetters } from "vuex";
export default {
  name: "html-code",
  components: {
    Prism,
  },
  props: [],
  mounted() {
    // console.log(this.previewHtml)
    // console.log(this.htmlCode)
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters("metaDataStore", ["previewHtml"]),
  },
};
</script>


<style scoped>
.html-code {
  width: 100%;
  height: 100vh;
}
.code {
  border-radius: var(--border-radius);
  background: #1b1b1b;
  margin-right: 10px;
  min-height: 600px;
  box-shadow: var(--box-shadow);
}
</style>
