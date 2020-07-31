<template>
  <div class="check-box">
    <input type="checkbox" id="checkbox" :checked="darkMode" @change="handleCheckbox" />
    <label for="checkbox">{{ label }}</label>
  </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
export default {
    props: ['label', 'id'],
    data() {
        return {
            
        }
    },
    mounted() {
        console.log(this.darkMode)
    },
    methods: {
         ...mapActions('prismStore', ['updateCheckbox']),
         handleCheckbox() {
             this.updateCheckbox(this.id)
         }
    },
    computed: {
        ...mapState('prismStore', ['darkMode']),
    }
};
</script>

<style scoped>
    .check-box {
        padding: 10px 0;
    }
</style>