<template>
  <div class="header container">
    <nuxt-link to="/" class="nav-title">landing pager</nuxt-link>
    <div class="login">
      <nuxt-link class="link" to="/login">Sign In</nuxt-link>
      <p class="link">/</p>
      <nuxt-link class="link" to="/signUp"> Sign Up</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.header {
  width: 100%;
  background: white;
  font-weight: bold;
  letter-spacing: 1px;

  display: flex;
  justify-content: space-between;
 
}

.login {
  display: flex;
}

.nav-title, .login .link {
    padding: 25px 5px;
    text-decoration: none;
    color: #2f2f2f;
    text-transform: capitalize;
}
</style>