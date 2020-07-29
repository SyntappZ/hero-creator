<template>
  <div class="title-wrap">
    <h3 class="title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.title-wrap {
  width: 100%;
  padding: 10px 0 40px 0;
}

.title {
  color: rgb(102, 102, 102);
  text-transform: capitalize;
}
</style>