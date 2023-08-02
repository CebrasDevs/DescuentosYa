// Cuando se agregue todo en el index del handler vamos a descomentarlo

// const {
//     createUserHandler,
//     updateUserHandler,
//     getUsersHandler
// } = require("../handlers");

//instanaciamos router para direccionar segun metodos y rutas
const { Router } = require("express");
const router = Router();

router.post("/", createUserHandler);
router.patch("/:id", updateUserHandler);
router.get("/", getUsersHandler);

module.exports = router;
