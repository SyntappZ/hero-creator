<template>
  <div class="preview-links">

      <nuxt-link :class="[link, onPreview ? linkUnderline : '']" to="/">Builder</nuxt-link>
      <nuxt-link :class="[link, onPreview ? '' : linkUnderline]" to="/preview">Preview</nuxt-link>
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkUnderline: "onLink",
      link: "link",
      
    };
  },
  computed: {
    onPreview() {
        const page = this.$route.path;
        return page === '/'
    }
  },
};
</script>

<style scoped>
.preview-links {
  width: 100%;
  display: flex;
  background: #f6f6f6;
  border-bottom: solid 1px #e6e6e6;
  justify-content: center;
 
}
.link {
  padding: 50px 50px 40px 50px;
  color: rgb(97, 97, 97);
  text-decoration: none;
  text-align: center;
  text-transform: capitalize;
  font-size: 18px;

  letter-spacing: 1px;
  font-weight: bold;
}
.onLink {
  border-bottom: 3px solid var(--light-blue);
  color: var(--light-blue);
}
</style>