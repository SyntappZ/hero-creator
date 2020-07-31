<template>
  <div class="meta-data">

    <InputData placeholder="Document Title" id="documentTitle" />
    <InputData placeholder="Description" id="description" />
    <InputData placeholder="Author" id="author" />
    <InputData placeholder="keywords seperate with commas" id="keywords" />
    <Button title="add data" @handleSubmit="nextSlide" />
  </div>
</template>

<script>

import InputData from "../InputData.vue";

import Button from "../Button.vue";
export default {
  props: ["title"],
  components: {
    InputData,
    
    Button,
  },
  data() {
    return {
     
    };
  },
  methods: {
    nextSlide() {

    }
  
  },
  computed: {
    
  },
};
</script>

<style scoped>
.meta-data {
 
}
</style>