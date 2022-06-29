// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const User = require("./../models/User.model");
require("../db");

// // crear
// router.get("/celebrities/create", (req, res, next) =>
//   res.render("celebrities/new-celebrity")
// );

// router.post("/celebrities/create", (req, res, next) => {
//   console.log(req.body);
//   const { name, occupation, catchPhrase } = req.body;

//   Celebrity.create({ name, occupation, catchPhrase })

//     .then(() => res.redirect("/celebrities"))
//     .catch((error) => res.render("celebrities/new-celebrity"));
// });

// router.get("/celebrities", (req, res, next) => {
//   Celebrity.find()
//     .then((response) => {
//       console.log(response);
//       res.render("celebrities/celebrities.hbs", { response });
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

module.exports = router;
