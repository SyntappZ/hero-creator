<template>
  <div class="radios">
    <div class="radio-wrap">
      <div class="radio" v-for="name in radios" :key="name">
        <input type="radio" :id="name" :value="name" v-model="picked" @change="changeFont"  />
       
        <label :for="name">{{ name }}</label>
      </div>
    </div>

    <div class="display" v-if="isFonts">
      <h1 :style="fontStyle" >{{picked}}</h1>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  props: ["radios", "isFonts"],
  mounted() {
    console.log(this.mainFont)
    this.picked = this.mainFont
  },
  data() {
    return {
       picked: "Arial",
     
    };
  },
  methods: {
      changeFont() {
          this.updateFont(this.picked);
      },
      ...mapActions('metaDataStore', ['updateFont'])
  },
  computed: {
      ...mapState('metaDataStore', ['mainFont', 'author']),
    fontStyle() {
      return { fontFamily: this.picked };
    },
    
  },
};
</script>

<style scoped>
.radio-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.radio {
    margin: 5px;
}
.display {
    width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
    display: flex;
    background: var(--linear-background);
    margin-top: 20px;
    
}

h1 {
  color: white;
    padding: 20px;
    font-weight: 500;
    font-size: 50px;
}
</style>