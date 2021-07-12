export default {
  async getArticles({ commit }) {
    await this.$axios({
      method: "GET",
      url: "/articles",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        commit("setArticles", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
