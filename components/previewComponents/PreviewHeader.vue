<template>
  <header class="header" :style="headerStyle">
    <div class="container header-container" :style="headerContainerStyle">
      <p class="header-title" :style="titleStyle">{{title}}</p>
      <div class="links" :style="{display: 'flex'}">
        <a href="#about" :style="link" class="header-link">about</a>
        <a href="#skills" :style="link" class="header-link">skills</a>
        <a href="#projects" :style="link" class="header-link">projects</a>
        <a href="#contacts" :style="link" class="header-link">contacts</a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["title"],
  data() {
    return {};
  },
  computed: {
    ...mapState("metaDataStore", [
      "pageWrapper",
      "headerCenter",
      "linkColor",
      "headerFontWeight",
      "headerBackground",
    ]),
    headerContainerStyle() {
      return {
        display: "flex",
        maxWidth: this.pageWrapper,
        justifyContent: this.headerCenter ? "center" : "space-between",
      };
    },
    titleStyle() {
      return {
        padding: "30px",
        color: this.linkColor,
      };
    },
    link() {
      return {
        padding: "30px",
        color: this.linkColor,
        textDecoration: "none",
      };
    },
    headerStyle() {
      return {
        background: this.headerBackground,
        borderBottom: "solid 2px #e7e7e7",
        fontWeight: this.headerFontWeight,
        textTransform: this.headerTextTransform,
      };
    },
  },
  mounted() {
    //  const root = document.documentElement
    // console.log(this.$vnode)
  },
};
</script>

<style scoped>
header {
}

.container {
  width: 100%;
  max-width: 1900px;
  margin: 0 auto;
  padding: 0 30px;
}

/* .links {
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
} */
</style>