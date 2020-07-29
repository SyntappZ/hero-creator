<template>
  <div class="section-container">
    <div class="wrap">
      <Section :slides="sections[this.sectionIndex].slides" :id="slideIndex" />
    </div>
    <div class="footer">
      <button @click="changeSlide(false)">back</button>
      <button @click="changeSlide(true)">next</button>
    </div>
  </div>
</template>

<script>
import Section from "./Section.vue";

import { mapState } from "vuex";
export default {
  mounted() {
    
  },
  components: {
    Section,
   
  },
  data() {
    return {
     slideIndex: 0,
    };
  },
  computed: {
    ...mapState("dataStore", ["sections", "currentSection"]),
    sectionIndex() {
      return this.currentSection - 1
    },
   

  },
  methods: {
    changeSlide(forward) {
      if (forward) {
        this.slideIndex++
      }
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