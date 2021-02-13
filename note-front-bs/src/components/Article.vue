<template>
  <div>
    <!-- <h3>メモのタイトルは{{ articles.title }}</h3> -->
    <p>本文は、ID.{{ $route.params.id }}の詳細を表示する</p>
  </div>
</template>
<script>
// import articles from '@/domain/articles.js'
export default {
  props: {id : Number},
  // watch: {
  //   articles: () => articles.fetch()
  // }
}
</script>