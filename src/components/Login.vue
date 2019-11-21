<template>
  <div class="background">
    <div class="login">
      <div v-if="loggingIn" class="container-loading">
        <img src="/loading.gif" alt="Loading Icon" />
      </div>
      <img src="/logo.png" width="340px" alt="logo" />
      <h2>Chatbot Tool</h2>
      <form @submit.prevent="loginSubmit">
        <input type="username" placeholder="Username" required v-model="username" />
        <input type="password" placeholder="Password" required v-model="password" />
        <button type="submit">LOGIN</button>
        <p style="color: red" v-if="loginError">{{ loginError }}</p>
        <small>Forgot Password?</small>
      </form>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["loggingIn", "loginError"])
  },
  methods: {
    ...mapActions(["doLogin"]),
    loginSubmit() {
      this.doLogin({
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>
