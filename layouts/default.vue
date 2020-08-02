<template>
  <div>
    <Header />
    <CodeLinks />
    <Nuxt />
  </div>
</template>

<script>
import Header from "../components/PageHeader.vue";
import CodeLinks from "../components/CodeLinks.vue";
import {mapActions, mapState} from 'vuex'
export default {
  components: {
    Header,
    CodeLinks,
  },
  mounted() {
    const root = document.documentElement
    
  },
  methods: {
    // ...mapActions('prismStore', ['updateRoot'])
  },
  computed: {
    // ...mapState('prismStore', ['darkMode']),

  },
  
  
};
</script>

<style>
:root {
  --main: #5f1735;
  --peach: #dba7a2;
  --light-main: #94395f;
  --border-radius: 10px;
  --box-shadow: 10px 10px 25px -19px #2f2f2f8f;
  --linear-background: linear-gradient(0deg, var(--main), rgb(144, 24, 60));

  /* template variables */
  --linkColor: #333;
  --sectionBackground: white; 
  --textColor: #333;
  --headerBackground: white;
  --fontWeight: bold;
  --headerTextTransform: capitalize;
  --templateFont: Arial;
}
body {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  background: #f6f6f6;
  overflow-y: scroll;
}

.h3-title {
  text-transform: capitalize;
  padding: 10px 0;
}

.slidePosition {
  position: absolute;
}

.container {
  width: 100%;
  max-width: 1460px;
  margin: 0 auto;
  padding: 0 30px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
