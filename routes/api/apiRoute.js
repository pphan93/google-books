const axios = require("axios");
const router = require("express").Router();

https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyCwhkMEbc5hKgD3IKt9pzS1GQTuq7seMeQ

const APIKEY = "AIzaSyCwhkMEbc5hKgD3IKt9pzS1GQTuq7seMeQ"

router.get("/searchBooks", (req, res) => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query },"&key=" + APIKEY)
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;