const axios = require("axios");
const router = require("express").Router();

https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyCwhkMEbc5hKgD3IKt9pzS1GQTuq7seMeQ

//{ params: req.query }
router.get("/searchBooks", (req, res) => {
  const apikey = "AIzaSyCwhkMEbc5hKgD3IKt9pzS1GQTuq7seMeQ"
  console.log(req.query.q)
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.q + "&key=" + apikey)
    // .get('https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyAohmRJuVpM5zHRj9nVXcBA-wJ7no6O4mw')
    .then((results) => res.json(results.data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;