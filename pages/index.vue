<template>
  <div class="container">
    <div>
      <div v-for="article in articles">
        <b-card
          v-if="article.status == 'published'"
          :img-src="'https://strapi.lakritsroten.se' + article.image.url"
          img-alt="Card image"
          img-top
          border-variant="primary"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
          class="mt-3 mb-3"
        >
          <template #header>
            <h4 class="mb-0">{{ article.title }}</h4>
          </template>
          <b-card-text>
            <p>{{ article.body }}</p>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { articaldata } from '@/mixins/shared.js';
export default {
  mixins: [articaldata],
  async asyncData({ store, query, req }) {
    await store.dispatch("getArticles");
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
