<template>
  <div class="section-container">
    <div class="wrap">
      <Title :title="slideTitle" />
      <Slides />
    </div>
    <div class="footer">
      <button @click="pagination(slide > 0 ? --slide : 0)">back</button>
      <button @click="pagination(slide < 24 ? ++slide : 24)">next</button>
    </div>
  </div>
</template>

<script>
import Slides from "./Slides.vue";
import Title from "./Title.vue";
import { mapState, mapActions } from "vuex";
export default {
  mounted() {},
  components: {
    Slides,
    Title,
  },
  data() {
    return {
      slide: 0,
    };
  },
  computed: {
    ...mapState("dataStore", [
      "sections",
      "slides",
      "currentSection",
      "currentSlide",
    ]),
    slideTitle() {
      const title = this.sections[this.currentSection].title;
      const slideTitle = this.slides[this.currentSlide].title;
      const check = title === "setup" ? slideTitle : `${title} ${slideTitle}`;
      return slideTitle;
    },
  },

  methods: {
    ...mapActions("dataStore", ["changeSlide", "changeSection"]),
    pagination(slide) {
      this.changeSlide(slide);
    },
  },
};
</script>

<style scoped>
.section-container {
  flex: 1 1 100px;
  background: white;
  min-height: 520px;
  border-radius: var(--border-radius);
  margin-right: 10px;
  box-shadow: var(--box-shadow);
}

.wrap {
 
  padding: 20px 50px;
  min-height: 420px;
}

.footer {
  height: 100px;
  background: var(--linear-background);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>