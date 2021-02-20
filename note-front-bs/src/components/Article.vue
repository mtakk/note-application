<template>
  <div>
    <h5>↓メモを以下に表示↓</h5>
    <p>{{ article.id }}{{ article.title }}{{ article.body }}</p>
    <!-- <h5>テスト用メモコーナー</h5>
    <p>{{ test }}</p>
    <p>{{ testJson[0].id}}{{ testJson[0].msg}}</p>
    <p>{{ testJson[1].id}}{{ testJson[1].msg}}</p> -->
  </div>
</template>
<script>
// import articles from '@/domain/articles.js'
export default {
  name: "Article",
  props: {
    test: String,
    article: Object,
    testJson: Object,
  },
  // props: {
  //   // id : Number,
  //   test: String,
  // },
  data() {
    return {};
  },
  // watch: {
  //   id: {
  //     handler() {
  //       articles.asyncFind(this.id, item => {
  //         this.item = item
  //       })
  //     },
  //     immediate: true
  //   }
  // }
};
</script>
