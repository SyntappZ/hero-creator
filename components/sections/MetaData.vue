<template>
  <div class="meta-data">
    <Title :title="title" />
    <InputData placeholder="Document Title" v-model="documentTitle" />
    <InputData placeholder="Description" v-model="description" />
    <InputData placeholder="Author" v-model="author" />
    <InputData placeholder="keywords seperate with commas" v-model="keywords" />
    <Button title="add data" @handleSubmit="handleSubmit" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import InputData from "../InputData.vue";
import Title from "../Title.vue";
import Button from "../Button.vue";
export default {
  props: ["title"],
  components: {
    InputData,
    Title,
  },
  data() {
    return {
      documentTitle: "",
      description: "",
      author: "",
      keywords: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        documentTitle: this.documentTitle,
        description: this.description,
        author: this.author,
        keywords: this.keywords,
      };
      this.updateMetaData(data);
    },
    ...mapActions("prismStore", ["updateMetaData"]),
  },
  computed: {
    
  },
};
</script>

<style scoped>
</style>