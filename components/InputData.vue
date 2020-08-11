<template>
  <div class="input-wrap">
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      v-model="inputValue"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ["id", "placeholder"],
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    ...mapActions("metaDataStore", ["updateInputData"]),
  
  },
  watch: {
    inputValue() {
     
      this.updateInputData({id: this.id, input: this.inputValue})
    }
  }

 
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