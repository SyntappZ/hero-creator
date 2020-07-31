<template>
  <div class="fonts">
      <h3 class="h3-title">choose font</h3>
      <Radios :radios="fonts" :isFonts="true" />
  </div>
</template>

<script>
import Radios from '../Radios.vue'

export default {
    components: {
     
        Radios
    },
    data() {
        return {
            fonts: ['Nunito', 'Orbitron', 'Barlow', 'Indie Flower', 'Josefin Sans', 'Raleway', 'Roboto', 'Ubuntu']
        }
    }
}
</script>

<style scoped>
.fonts {
 
}
 
</style>