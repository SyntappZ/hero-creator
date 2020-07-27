<template>
  <div>
    <Header />
    <PreviewLinks />
    <Nuxt />
  </div>
</template>

<script>
import Header from '../components/PageHeader.vue'
import PreviewLinks from '../components/PreviewLinks.vue'
export default {
  components: {
    Header,
    PreviewLinks
  }
}
</script>

<style>

:root {
  --main: #5f1735;
  --peach: #DBA7A2;
  --light-main: #94395f;
  --border-radius: 10px;
  --box-shadow: 10px 10px 25px -19px #2f2f2f8f;
  --linear-background: linear-gradient(0deg, var(--main), rgb(144, 24, 60));
}
body {
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  background: #f6f6f6;
  overflow-y: scroll;
}

.container {
  padding: 0 250px;
}


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


</style>
