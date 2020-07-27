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
  --main-blue: #082b59;
  --light-blue: #08428C;
}
body {
  font-family: 'Barlow', sans-serif;
 
  font-size: 16px;
  box-sizing: border-box;
  background: #f6f6f6;
  overflow-y: scroll;
}

.container {
  padding: 0 150px;
}


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}


</style>
