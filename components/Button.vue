<template>
  <div class="btn" @click="handleSubmit">{{ title }}</div>
  
</template>

<script>
export default {
    props: ['title'],
    methods: {
    handleSubmit() {
      this.$emit("handleSubmit");
    },
  },
};
</script>

<style scoped>
.btn {
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  letter-spacing: 2px;
  color: white;
  border-radius: 50px;
  background: var(--linear-background);
  cursor: pointer;
  transition: 0.5s;
  margin: 10px auto;
}


.btn:hover {
  transform: scale(0.9);
}

</style>