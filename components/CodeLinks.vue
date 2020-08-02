<template>
  <div class="code-links">
    <div class="container">
      <h3>{{codeType}} code</h3>
      <div class="link-wrap">
        <nuxt-link :class="[link, onCode ? linkUnderline : '']" to="/">Builder</nuxt-link>
        <nuxt-link :class="[link, onCode ? '' : linkUnderline]" to="/code">Code</nuxt-link>
      </div>
      <h3></h3>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      linkUnderline: "onLink",
      link: "link",
    };
  },
  computed: {
    ...mapState(["codeType"]),
    onCode() {
      const page = this.$route.path;
      return page === "/";
    },
  },
};
</script>

<style scoped>
.code-links {
  width: 100%;
  background: #f1f1f1;
  border-bottom: solid 1px #e6e6e6;
  color: rgb(100, 100, 100);
  position: relative;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  width: 250px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 22px;
}

.link-wrap {
  height: 100%;
  display: flex;
}
.link {
  padding: 40px 40px 30px 40px;
  color: rgb(97, 97, 97);
  text-decoration: none;
  text-align: center;
  text-transform: capitalize;
  font-size: 18px;
  display: block;
  letter-spacing: 1px;
  font-weight: bold;
}
.onLink {
  border-bottom: 3px solid var(--light-main);
  color: var(--light-main);
}
</style>