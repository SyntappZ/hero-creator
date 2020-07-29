<template>
  <div class="section-chooser">
    <div class="title-wrap">
      <h2>Sections</h2>
    </div>
    <SectionButton
      v-for="section in sections"
      :key="section.id"
      :title="section.title"
      :id="section.id"
      :slideAmount="section.slideAmount"
      :currentSection="currentSection"
    />
  </div>
</template>

<script>
import SectionButton from "./SectionButton.vue";
import { mapState } from "vuex";
export default {
  components: {
    SectionButton,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("dataStore", ["sections", "currentSection"]),
  },
};
</script>

<style scoped>
.section-chooser {
  width: 400px;
  height: 520px;
  background: var(--linear-background);
  border-radius: var(--border-radius);
  margin-left: 10px;
  box-shadow: var(--box-shadow);
  color: white;
  padding: 0 40px;
}
.title-wrap {
  height: 70px;
  display: flex;
  align-items: flex-end;
}

h2 {
  letter-spacing: 0.5px;
  padding-bottom: 10px;
}
</style>