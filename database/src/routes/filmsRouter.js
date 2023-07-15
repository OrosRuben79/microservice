const { Router } = require("express");

const {
    getFilms,
    createFilm,
    updateFilm,
    deleteFilm,

  } = require("../controllers/filmsController");

 
  
  const router = Router();
  
  router.get("/", getFilms);
  router.post("/", createFilm);
  router.put("/:id", updateFilm);
  router.delete("/:id", deleteFilm);


  module.exports = router;