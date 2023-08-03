const {
    createMembersHandler,
    updateMembersHandler,
    getMembersHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();

router.post("/", createMembersHandler);
router.patch("/:id", updateMembersHandler);
router.get("/", getMembersHandler);

module.exports = router;
