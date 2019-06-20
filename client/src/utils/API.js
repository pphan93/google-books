import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    return axios.get("/api/search/searchBooks", { params: { q: query } });
  },
  saveBooks: function(booksData) {
    return axios.post("/api/books", booksData);
  },
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
