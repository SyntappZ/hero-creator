<template>
  <div class="input-wrap">
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      :value="value" 
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>

export default {
  props: ["storeTo", "placeholder"],
  data() {
    return {
      inputData: "",
    };
  },
 
};
</script>

<style scoped>
.input {
  width: 100%;
  min-width: 200px;
  height: 50px;
  margin-bottom: 10px;
  
  border: solid 1px #c2c2c2;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.5;
}


.input::placeholder {
  color: #b6b6b6;
  text-transform: capitalize;
}
</style>