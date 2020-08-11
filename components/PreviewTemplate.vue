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
    const body = this.$el.innerHTML.replace(/data-v-a79ca6ce=""/g, "");
    console.log(body)
    this.styleExtractor(body)
    this.body = body;
  },
  updated() {
    const body = this.$el.innerHTML.replace(/data-v-a79ca6ce=""/g, "");
  
    this.body = body;
  },
  data() {
    return {
      body: "",
      classes: [
        '.body',
        '.header',
        '.header-container',
        '.header-title',
        '.links',
        '.header-link'
      ]
    };
  },
  watch: {
    body() {
      this.updateHtmlBody(this.body);
    },
  },
  computed: {
    ...mapState("metaDataStore", [
      "keywords",
      "author",
      "description",
      "documentTitle",
      "mainFont",
      "sectionBackground",
      "bodyBackground"
    ]),
    headerClass() {
      return;
    },
    bodyStyle() {
      return {
        fontFamily: this.mainFont
      }
    },
    sectionStyle() {
      return {
        background: this.sectionBackground,
        minHeight: '100vh' 
      };
    },
  },
  methods: {
    ...mapActions("metaDataStore", ["updateHtmlBody", "headerLayout"]),
    styleExtractor(html) {
     const css = []

      this.classes.forEach(item => {
        if(item === '.body') {
          item = 'body'
        }
         const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const element = doc.querySelector(item)
        // console.log(element.style.cssText)
        css.push(`${item} { ${element.style.cssText} }`)
      })
       
        console.log(css)
    
    },
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
