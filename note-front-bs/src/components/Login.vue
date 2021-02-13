<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/note.jpg" width="300" height="200">
    <h3>ログイン</h3>
    <form @submit.prevent="callLogin()">
      <input type="text" placeholder="username" v-model="userName">
      <br>
      <input type="password" placeholder="password" v-model="password">
      <br>
      <b-btn type="submit">ログイン</b-btn>
      <br>
    </form>
    <br>
    <b-btn @click="callEasyLogin()" type="button">かんたんログイン</b-btn>
    <router-link to="/top">かんたんログイン(ルーターリンク)</router-link>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <!-- <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      userName: '',
      password: ''
    }
  },

  methods: {
    callEasyLogin() {
      console.log('簡単login')
      this.$router.push('/top')
    },
    callLogin() {
      console.log('フォームlogin in Login.vue')
      this.$store.dispatch("login", { userName: this.userName, password: this.password }).then(() => {
        this.$router.push('/top')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
