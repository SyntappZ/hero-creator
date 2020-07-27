<template>
  <div class="css-code">
    <prism class="code" language="css">{{ cssCode }}</prism>
  </div>
</template>

<script>
import "prismjs/prism";
import "prismjs/themes/prism-okaidia.css";
import Prism from "vue-prism-component";

export default {
  name: "css-code",
  components: {
    Prism,
  },
  props: [],
  mounted() {},
  data() {
    return {
      
    };
  },
  computed: {
    cssCode() {
      return `body {
  margin: 0;
  font-size: 16px;
}
      
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`;
    },
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
