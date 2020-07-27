<template>
  <div class="selector">
    <div class="selector-wrap">

    </div>
    <div class="skipper">

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.selector {
  flex: 1 1 100px;
  background: white;
  height: 500px;
  border-radius: var(--border-radius);
  margin-right: 10px;
  box-shadow: var(--box-shadow);
 
}

.selector-wrap {
  padding: 20px;
  height: 400px;
}

.skipper {
  height: 100px;
  background: var(--linear-background);
  
  
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
}
</style>