<template>
  <div class="css-code">
    <prism class="code" language="css">{{ css }}</prism>
  </div>
</template>

<script>
import "prismjs/prism";
import "prismjs/themes/prism-okaidia.css";
import Prism from "vue-prism-component";
import { mapGetters } from 'vuex'
import cssbeautify from 'cssbeautify'
export default {
  name: "css-code",
  components: {
    Prism,
  },
  props: [],
  mounted() {
    
  },
  data() {
    return {
      
    };
  },
  computed: {
      ...mapGetters("metaDataStore", ["previewCss"]),
      css() {
        return cssbeautify(this.previewCss)
      }
    
  },
};
</script>


<style scoped>
.css-code {
  width: 100%;
  height: 100vh;
}
.code {
  border-radius: var(--border-radius);
  background: #1b1b1b;
  min-height: 600px;
 box-shadow: var(--box-shadow);
  margin-left: 10px;
}
</style>
