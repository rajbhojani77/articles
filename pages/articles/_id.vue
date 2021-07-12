<template>
  <div class="container">
<articleDetails :article="article"></articleDetails>
  </div>
</template>

<script>
import { articaldata } from '@/mixins/shared.js';
export default {
  mixins: [articaldata],
  computed: {
    article() {
      let articles = this.$store.getters.getArticles;
      for (let article in articles) {
        if (articles[article].id == this.$route.params.id) {
          return articles[article];
        }
      }
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
