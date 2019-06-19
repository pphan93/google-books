const router = require("express").Router();
const bookRoutes = require("./books");
const apiRoute = require("./apiRoute");

// Book routes
router.use("/books", bookRoutes);
router.use("/search", apiRoute);

module.exports = router;
