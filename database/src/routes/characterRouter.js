const { Router } = require("express");

const {
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,

  } = require("../controllers/characterController");

 
  
  const router = Router();
  
  router.get("/", getCharacters);
  router.post("/", createCharacter);
  router.put("/:id", updateCharacter);
  router.delete("/:id", deleteCharacter);


  module.exports = router;