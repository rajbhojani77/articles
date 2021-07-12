<template>
  <div class="container">
    <div>
      <div v-for="article in articles">
        <b-card
          :img-src="'https://strapi.lakritsroten.se' + article.image.url"
          img-alt="Card image"
          img-left
          style="max-width: 100rem;"
          border-variant="primary"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
          class="mt-3 mb-3"
        >
          <template #header>
            <h4 class="mb-0">{{ article.title }}</h4>
                      <b-button
            size="sm"
            variant="primary"
            :to="'articles/' + article.id"
          >
            View
          </b-button>
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
img {
  width: 210rem;
}
</style>
