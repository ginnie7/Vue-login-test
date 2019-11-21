<template>
  <div class="background">
    <h2>Welcome!</h2>
    <h3>You are under a protected route. You can interact with users.</h3>
    <ul>
      <li>{{this.users}}</li>
    </ul>
    <button class="logout" @click="logout">Logout</button>
  </div>
</template>

<style  lang="scss">
.logout {
  margin: 0 auto;
  max-width: 300px;
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: 200;
  padding: 1rem;
  background-color: black;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgb(89, 89, 89);
  }
}
h3 {
  margin-bottom: 2rem;
}
</style>

<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      // username: username,
      users: {}
    };
  },
  created() {
    axios
      .get("%API CALL TO USERS ENDPOINT%")
      .then(response => {
        this.users = response.data.users;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>