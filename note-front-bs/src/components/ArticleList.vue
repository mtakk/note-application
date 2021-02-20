<template>
  <div>
    <h3>記事一覧</h3>
    <p>記事コンポーネント</p>

    <div v-for="article of articles" :key="article.id">
      <Article v-bind:article="article"> </Article>
    </div>
    <!-- テスト用（データのプロップダウン） -->
    <!-- <Article v-bind:test="test"
    v-bind:testJson=testJson
    ></Article>
     -->
    <!-- テスト用（URLを使ったリンクのリスト表示） -->
    <!-- <ul>
      <li v-for="{ id, title } in list" :key="id">
        <router-link :to="`/article/${id}`">{{ title }}</router-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
import Article from "./Article";
import articleData from "@/domain/articles.js";

export default {
  name: "ArticleList",
  components: {
    Article,
  },
  data() {
    return {
      items: null,
      articles: articleData.fetch(),
      // テスト用データ
      // test: 'testdata',
      // testJson: [{id: 1, msg: 'msg1'},{id: 2, msg: 'msg2'}]

      // list: []
      // test: 'テストデータ'
    };
  },
  computed: {
    // list: () => articleData.fetch(),
  },
};
</script>
