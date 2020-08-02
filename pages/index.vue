<template>
  <div class="main ">
    <div class="container">
       <h2 class="title">{{section.title}}</h2>
    <p class="subtitle">{{section.slideAmount}} Slides</p>
    </div>

   
    <div class="setup-wrap container">
      <div class="selector-wrap">
        <SectionContainer />
      </div>
      <div class="sections-wrap">
        <SectionChooser />
      </div>
    </div>
    <div class="preview-wrap">
    <PreviewTemplate />
    </div>
  </div>
</template>

<script>

import SectionContainer from "../components/SectionContainer.vue";
import SectionChooser from "../components/SectionChooser.vue";
import PreviewTemplate from '../components/PreviewTemplate.vue'
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    SectionContainer,
    SectionChooser,
    PreviewTemplate
  },
 
  data() {
    return {
     
    };
  },
  computed: {
    ...mapState("dataStore", ["sections", "currentSection"]),
   
    section() {
      return this.sections[this.currentSection];
    },
  },
};
</script>

<style scoped>
.setup-wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
}

.title {
  padding: 70px 0 0 0;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  font-size: 27px;
}


.subtitle {
  padding-bottom: 20px;
  color: #a5a5a5;
  font-weight: 500;
  text-transform: capitalize;
}


.section-wrap {
  flex-grow: 1;
 
}

.selector-wrap {
  flex-grow: 1;
  
 
}

.preview-wrap {
  padding: 50px 0;
  margin: 50px 30px;
}


</style>
