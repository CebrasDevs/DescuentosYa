const {
    createMemberHandler,
    updateMemberHandler,
    getMembersHandler
} = require("../handlers");

//instanaciamos router para direccionar segun metodos y rutas
const { Router } = require("express");
const router = Router();

router.post("/", createMemberHandler);
router.patch("/:id", updateMemberHandler);
router.get("/", getMembersHandler);

module.exports = router;
