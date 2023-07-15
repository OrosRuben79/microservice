const { Router } = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/Planet", controllers.getPlanets);

router.post("/Planet", controllers.createPlanets);




module.exports = router;