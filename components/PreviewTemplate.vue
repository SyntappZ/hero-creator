<template>
  <div class="body">
    <PreviewHeader  :title="documentTitle" />
    <section class="welcome"></section>
    <section class="about"></section>
    <section class="skills"></section>
    <section class="projects"></section>
    <section class="contact"></section>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "preview",
  components: {},
  props: [],
  mounted() {
    const body = this.$el.innerHTML.replace(/data-v-a79ca6/g, "");
    this.body = body;
  },
  updated() {
    const body = this.$el.innerHTML.replace(/data-v-a79ca6/g, "");
    this.body = body;
  },
  data() {
    return {
      body: "",
      
    };
  },
  watch: {
    body() {
      
      this.updateHtmlBody(this.body);
    },
  },
  computed: {
    ...mapState("prismStore", [
      "keywords",
      "author",
      "description",
      "documentTitle",
    ]),
    headerClass() {
      return ;
    },
  },
  methods: {
    ...mapActions("prismStore", ["updateHtmlBody", "headerLayout"]),
  },
};
</script>


<style scoped>

.body {
  width: 100%;
  margin: 30px 0;
  font-family: var(--templateFont);
}


.header-title-layout {

  justify-content: space-between;
}

section {
  height: 100vh;
  background: var(--sectionBackground);
}
</style>
