<template>
  <div>
    <h3>メモのタイトル</h3>
    <p>本文は、ID.{{ $route.params.id }}の詳細を表示する</p>
  </div>
</template>
<script>
export default {
  props: {id : Number}
}
</script>