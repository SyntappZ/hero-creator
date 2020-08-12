<template>
  <div>
    <div class="body" :style="bodyStyle">
      <PreviewHeader :title="documentTitle" />
      <section :style="sectionStyle" class="welcome"></section>
      <section :style="sectionStyle" class="about"></section>
      <section :style="sectionStyle" class="skills"></section>
      <section :style="sectionStyle" class="projects"></section>
      <section :style="sectionStyle" class="contact"></section>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "preview",
  components: {},
  props: [],
  mounted() {
    // console.log(this.$route)
    // const css = this.styleExtractor(body);
    // console.log(css);
    // this.body = body;
  },
  updated() {
    // const body = this.$el.innerHTML.replace(/data-v-a79ca6ce=""/g, "");
    // const css = this.styleExtractor(body);
    // console.log(css);
    // this.body = body;
  },
  beforeDestroy() {
    
    this.updateHtmlBody(this.codeExtractor)
  },
  data() {
    return {
      body: "",
      classes: [
        ".body",
        ".header",
        ".header-container",
        ".header-title",
        ".links",
        ".header-link",
      ],
    };
  },
  watch: {
     $route () {
      console.log('route changed', this.$route)
    }
  },
  computed: {
    ...mapState("metaDataStore", [
      "keywords",
      "author",
      "description",
      "documentTitle",
      "mainFont",
      "sectionBackground",
      "bodyBackground",
    ]),
    headerClass() {
      return;
    },
    bodyStyle() {
      return {
        fontFamily: this.mainFont,
      };
    },
    sectionStyle() {
      return {
        background: this.sectionBackground,
        minHeight: "100vh",
      };
    },
    codeExtractor() {
      const body = this.$el.innerHTML.replace(
        /data-v-[0-9a-zA-Z]+=""|data-v-[0-9a-zA-Z]/g,
        ""
      );
      
      const css = this.classes.map((item) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(body, "text/html");

        const element = doc.querySelector(item);

        return `${item === ".body" ? "body" : item} { ${
          element.style.cssText
        } }`;
      });
      const html = body.replace(/style="[0-9a-zA-Z -;:]+"/g, "");

      return [css, html];
    },
  },
  methods: {
    ...mapActions("metaDataStore", ["updateHtmlBody", "headerLayout"]),
  },
};
</script>


<style>
.body {
  width: 100%;
  margin: 30px 0;
  height: 100%;
}

.header-title-layout {
  justify-content: space-between;
}
</style>
