<template>
  <b-card
    :img-src="'https://strapi.lakritsroten.se' + article.image.url"
    img-alt="Card image"
    img-top
    border-variant="info"
    header-bg-variant="info"
    header-text-variant="white"
    align="center"
    class="mt-3 mb-3"
  >
    <template #header>
      <h4 class="mb-0">{{ article.title }}</h4>
      <b-form-checkbox
        v-model="checked"
        name="check-button"
        @change="publish()"
        switch
        ><b>{{ checked ? "published" : "unpublished" }}</b>
      </b-form-checkbox>
    </template>
    <b-card-text>
      <p>{{ article.body }}</p>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    article: { type: Object, default: {} },
  },
  data() {
    return {
      checked: this.article.status == 'published' ? true:false,
    };
  },
  methods: {
    publish() {
      this.$store.commit("setStatus", {id:this.$route.params.id,checked:this.checked});
    },
  },
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
