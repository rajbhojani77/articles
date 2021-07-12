// const jwtDecode = require('jwt-decode')
export default {
  setArticles(state, data) {
    if (data) {
      state.articles = data;
    } else {
      state.articles = [];
    }
  },
  setStatus(state, { id, checked }) {
    if (id) {
      let articles = state.articles;
      for (let article in articles) {
        if (articles[article].id == id) {
          articles[article].status = checked ? "published" : "unpublished";
        }
      }
      localStorage.setItem("Articles", JSON.stringify(articles));
      state.articles = articles;
    } else {
      state.articles = [];
    }
  },
};
