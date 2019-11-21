<template>
  <router-view></router-view>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.background {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fafafa;
}
h2 {
  font-weight: 100;
  font-size: 2rem;
  font-style: italic;
  margin-bottom: 3rem;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  flex-direction: column;
  box-shadow: 1px 1px 5px #8080806b;
  background: #ffffff;
  padding: 1.5rem;
  min-width: 360px;
  overflow: hidden;
  .container-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  form {
    display: flex;
    flex-flow: column;
    *:not(:last-child) {
      margin-bottom: 1rem;
    }
    input {
      padding: 1rem;
      border: 0px;
      border-bottom: 1px solid black;
      font-size: 1.5rem;
      outline: none;
    }
    button {
      margin-top: 3rem;
      font-size: 1.6rem;
      font-weight: 200;
      padding: 1rem;
      background-color: black;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: rgb(89, 89, 89);
      }
    }
  }
  .msg {
    font-size: 2rem;
  }
}
</style>
