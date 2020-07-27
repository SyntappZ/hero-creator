<template>
  <div class="html-code">
    <prism language="html" class="code">{{htmlCode}}</prism>
  </div>
</template>

<script>
import "prismjs/prism";
import "prismjs/themes/prism-okaidia.css";
import Prism from "vue-prism-component";

export default {
  name: "html-code",
  components: {
    Prism,
  },
  props: ["documentTitle"],
  mounted() {},
  data() {
    return {
      code: "p { color: red }",
      title: "whats up my nigga",
      box: `<div class="box"></box>`,
      css: ".jeff { color: red }",
    };
  },
  computed: {
    htmlCode() {
      return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${this.documentTitle}</title>
    </head>
    <body>
       ${this.box}
    </body>
  </html>`;
    },
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
