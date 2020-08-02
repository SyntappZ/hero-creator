<template>
  <header class="header">
    <p class="title">{{title}}</p>
    <div class="links">
      <a href="#about"  class="link">about</a>
      <a href="#skills" class="link">skills</a>
      <a href="#projects" class="link">projects</a>
      <a href="#contacts" class="link">contacts</a>
    </div>
  </header>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
  
    };
  },
  computed: {
   
  },
  mounted() {

  }
};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  background: var(--headerBackground);
  border-bottom: solid 2px rgb(231, 231, 231);
}
.links {
  display: flex;
}
.title {
  padding: 20px 0;
}
.link {
  padding: 30px;
  text-decoration: none;
  color: var(--linkColor);
  font-weight: var(--fontWeight);
  text-transform: var(--headerTextTransform);
}
</style>