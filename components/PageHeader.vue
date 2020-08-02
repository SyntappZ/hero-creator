<template>
  <div class="header">
    <div class="container">
      <div class="logo-wrap" @click="backToHome">
        <img src="/images/landing-logo.png" class="logo" alt="logo" />
        <div class="title-wrap">
          <p class="nav-title">
            portfolio
            <span>creator</span>
          </p>
          <p class="subtitle">template generator</p>
        </div>
      </div>

      <div class="login">
        <div
          class="type-link"
          v-for="link in typeLinks"
          :class="[codeType === link ? underline : '']"
          :key="link"
          @click="changeType(link)"
        >{{link}}</div>

        <div class="splitter"></div>
        <nuxt-link class="link" to="/login">Sign In</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      typeLinks: ["html", "vue", "react"],
      underline: "underline",
    };
  },
  methods: {
    ...mapActions(["changeType"]),
    backToHome() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState(["codeType"]),
  },
};
</script>

<style scoped>
.header {
  position: relative;
  z-index: 10;
  width: 100%;
  background: white;
  font-weight: bold;
  letter-spacing: 1px;
 
  box-shadow: var(--box-shadow);
}

.container {
 display: flex;
  justify-content: space-between;
}

.logo-wrap {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo {
  width: 50px;
  height: 50px;
}

.login {
  display: flex;
}

.title-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

span {
  font-weight: 500;
}

.nav-title {
  color: #2f2f2f;
  text-transform: capitalize;
  font-size: 20px;
  padding-bottom: 2px;
}

.subtitle {
  color: #858585;
  text-transform: capitalize;
  font-size: 12px;
  font-weight: 400;
}

.splitter {
  width: 2px;
  padding: 17px 0;
  border-radius: 50px;
  margin: auto 28px auto 10px;
  background: rgb(230, 230, 230);
}

.type-link {
  padding: 27px 25px;
  color: #c8c8c8;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
}

.login .link {
  padding: 25px 5px;
  text-decoration: none;
  color: #2f2f2f;
  text-transform: capitalize;
}

.underline {
  border-bottom: 3px solid var(--light-main);
  color: var(--light-main);
  font-weight: bold;
}
</style>