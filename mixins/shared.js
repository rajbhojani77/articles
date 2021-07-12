export const articaldata = {
  mounted() {
    if (process.browser) {
      if (localStorage.getItem("Articles") != null) {
        let articles = JSON.parse(localStorage.getItem("Articles"));
        this.$store.commit("setArticles", articles);
      } else {
        localStorage.setItem(
          "Articles",
          JSON.stringify(this.$store.getters.getArticles)
        );
      }
    }
  },
  computed: {
    articles() {
      return this.$store.getters.getArticles;
    },
  }
};
