const {
    createMembersHandler,
    updateMembersHandler,
    getMembersHandler,
    getMembersByIdHandler,
} = require("../handlers");

const { Router } = require("express");
const router = Router();

router.post("/", createMembersHandler);
router.patch("/:id", updateMembersHandler);
router.get("/:id", getMembersByIdHandler);
router.get("/", getMembersHandler);


module.exports = router;
