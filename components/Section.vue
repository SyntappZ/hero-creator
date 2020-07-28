<template>
  <div class="section" :style="{borderBottom: id === 6 ? 'none' : null}">
    <div class="number">
      <h2>{{id}}</h2>
    </div>
    <div class="text">
      <div class="text-wrap">
        <p class="title">{{ title }}</p>
        <p class="subtitle">{{ sectionAmout }} sections</p>
      </div>
    </div>
    <div class="button-wrap" @click="changeSection(id)">
      <div :class="[circle, fill]"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["id", "title", "sectionAmout", "currentSection"],
  data() {
    return {
      circle: "circle",
    };
  },
  methods: {
    ...mapActions("dataStore",["changeSection"]),
  },
  computed: {
    fill() {
      return this.currentSection === this.id ? "fill" : "";
    },
  },
};
</script>

<style scoped>
.section {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid white 1px;
}

.number {
  flex: 1;
}
.text {
  flex: 6;
}

.fill {
  background: white;
}

.title {
  text-transform: capitalize;
  letter-spacing: 0.5px;
  font-weight: bold;
  padding-bottom: 2px;
  font-size: 18px;
}
.subtitle {
  color: #e6e6e6;
  text-transform: capitalize;
  letter-spacing: 0.5px;
  font-size: 14px;
  font-weight: 500;
}
.button-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  cursor: pointer;
}

.circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: solid 3px white;
}
</style>