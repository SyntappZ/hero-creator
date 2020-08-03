<template>
  <div class="slides">
 
    <transition-group name="fade">
      <MetaData :title="slide.title" key="0" v-if="slide.id === 0" />
      <Fonts :title="slide.title" key="1" v-if="slide.id === 1" />
      <Colors :title="slide.title" key="2" v-if="slide.id === 2" />
      <Buttons :title="slide.title" key="3" v-if="slide.id === 3" />
    </transition-group>
  </div>
</template>

<script>
import MetaData from "./slides/MetaData.vue";
import Colors from "./slides/Colors.vue";
import Fonts from "./slides/Fonts.vue";

import { mapState, mapGetters } from "vuex";
export default {
  
  props: ["sectionTitle"],
  components: {
    MetaData,
    Colors,
    Fonts,
  },
   methods: {
  
   },
  mounted() {
    
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState("dataStore", ["currentSection", "slides"]),
    ...mapGetters("dataStore", {slide: "currentSlide"})
   
  },
};
</script>

<style scoped>
.slides {
  width: 100%;
  height: 100%;
  
}

.wrap {
  width: 100%;
  height: 100%;
  
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-active {
  transition-delay: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>