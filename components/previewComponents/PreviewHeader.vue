<template>
  <header class="header">
    <div class="p-container">
      <p class="title">{{title}}</p>
      <div class="links">
        <a href="#about" class="link">about</a>
        <a href="#skills" class="link">skills</a>
        <a href="#projects" class="link">projects</a>
        <a href="#contacts" class="link">contacts</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  computed: {},
  mounted() {
    //  const root = document.documentElement
    // console.log(this.$vnode)
  },
};
</script>

<style scoped>
header {
  width: 100%;

  background: var(--headerBackground);
  border-bottom: solid 2px rgb(231, 231, 231);
  font-weight: var(--fontWeight);
  text-transform: var(--headerTextTransform);
  
}

header .p-container {
  display: flex;
  justify-content: var(--headerJustify);
}
.links {
  display: flex;
}
.title {
  padding: 30px;
   color: var(--linkColor);
}
.link {
  padding: 30px;
  text-decoration: none;
  color: var(--linkColor);
}
</style>