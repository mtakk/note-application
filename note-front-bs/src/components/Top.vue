<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/note.jpg" width="300" height="200">
    <h3>ネストのテスト</h3>
    <br>
    <p>
      記事のコンポーネントが以下に複数表示されます。
      <br>
      cliのドキュメントです。→
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>
    </p>
    <hr>

      <ArticleList></ArticleList>
      <!-- <Article></Article> -->

    <!-- <router-link to="/articleList">記事一覧(ルーターリンク)</router-link>
    <br>
    <router-link to="/article">記事(ルーターリンク)</router-link> -->


    <!-- <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
    </ul> -->
  </div>
</template>

<script>
import ArticleList from './ArticleList'

export default {
  name: 'Top',
  components: {
    ArticleList
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
