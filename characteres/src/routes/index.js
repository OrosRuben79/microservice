const { Router } = require("express");
const controllers = require("../controllers")
const middlewares = require("../middlewares")

const router = Router();

router.get("/Character", controllers.getCharacters);

router.post("/Character", middlewares.characterValidation, controllers.createCharacters);




module.exports = router;