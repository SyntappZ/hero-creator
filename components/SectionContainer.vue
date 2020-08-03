<template>
  <div class="section-container">
    <div class="wrap">
      <Title :title="slideTitle" />
      <Slides />
    </div>
    <div class="footer">
      <button @click="pagination(false)">back</button>
      <button @click="pagination(true)">next</button>
    </div>
  </div>
</template>

<script>
import Slides from "./Slides.vue";
import Title from "./Title.vue";
import { mapState, mapActions, mapGetters } from "vuex";
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
    ...mapGetters("dataStore", ['currentSlide']),
    ...mapState("dataStore", [
      "sections",
      "slides",
      "currentSection",
      
    ]),
    slideTitle() {
     
      return this.currentSlide.title
    },
  },

  methods: {
    ...mapActions("dataStore", ["pagination"]),
    
  },
};
</script>

<style scoped>
.section-container {
 min-width: 600px;
 width: 100%;
  background: white;
  min-height: 520px;
  border-radius: var(--border-radius);
  margin-right: 10px;
  box-shadow: var(--box-shadow);
}

.wrap {
  position: relative;
  padding: 20px 0;
  margin: 0 50px;
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