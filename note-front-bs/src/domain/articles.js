const articleData = [
  {id: 1, title: '1記事目のタイトル', body: '１記事目の本文'},
  {id: 2, title: '2記事目のタイトル', body: '2記事目の本文'}
]

export default {
  fetch() {return articleData},
  find( id ) { 
    return articleData.find(
      data => data.id == id
    )
  },
  asyncFind(id, callback){
    setTimeout (() => {
      callback(
        articleData.find(data => data.id == id)
      )
    }, 1000)
  }
}