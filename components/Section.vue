<template>
  <div class="section">
    <MetaData :title="title" />
  </div>
</template>

<script>
import MetaData from './sections/MetaData.vue'
export default {
  mounted() {
console.log(this.slides)
  },
  props: ["slides", "id"],
  components: {
    MetaData
  },
  data() {
    return {
      
    }
  },
  computed: {
   title() {
     return this.slides[this.id].title
   }
  }
};
</script>

<style scoped>
.section {
  width: 100%;
  height: 100%;
  
}
</style>