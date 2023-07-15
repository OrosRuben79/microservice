const { Router } = require("express");
const controllers = require("../controllers")

const router = Router();

router.get("/Film", controllers.getFilms);

router.post("/Film", controllers.createFilms);




module.exports = router;