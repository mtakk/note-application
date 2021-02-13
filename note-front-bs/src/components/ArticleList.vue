<template>
  <div>
    <h3>記事一覧</h3>
    <p>記事コンポーネント</p>
    <ul>
      <li v-for="{ id, title } in list" :key="id">
        <router-link :to="`/article/${ id }`">{{ title }}</router-link>
      </li>
    </ul>
    
    <ul>
      <Article v-for="item in items" :key="item.id"></Article>
    </ul>
  </div>
</template>

<script>
import Article from './Article'
import articles from '@/domain/articles.js'

export default {
  name: 'ArticleList',
  components: {
    Article
  },
  data() { 
    return { 
      items: null 
    }
  },
  computed: {
    list: () => articles.fetch()
  }

}
</script>