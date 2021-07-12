export const articaldata = {
  async mounted() {
    if (process.browser) {
      if (localStorage.getItem("Articles") != null) {
        let articles = JSON.parse(localStorage.getItem("Articles"));
        this.$store.commit("setArticles", articles);
      } else {
        await this.getArticals()
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
  },
  methods: {
    async getArticals() {
      await this.$store.dispatch('getArticles')
    },
  }
};
