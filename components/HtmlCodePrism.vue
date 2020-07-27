<template>
  <div class="html-template-code">
  <prism language="html">{{pageTemplate}}</prism>
  
  </div>
</template>

<script>
import 'prismjs/prism'
import 'prismjs/themes/prism-okaidia.css'
import Prism from 'vue-prism-component'

export default {
  name: "template-code",
  components: {
    Prism,
  
  },
  props: ['documentTitle'],
  mounted() {
   
    
  },
  data() {
    return {
      code: 'p { color: red }',
      title: 'whats up my nigga',
      box: '',
      css: ".jeff { color: red }"
    
    };
  },
  computed: {
    pageTemplate() {
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
.html-template-code {
  width: 100%;
  height: 100vh;
  padding: 10px 100px;
}
.code {
  display: block;
  width: 500px;
  height: 200px;
  background: #181818;
  color: white;
  border-radius: 10px;
}

</style>
