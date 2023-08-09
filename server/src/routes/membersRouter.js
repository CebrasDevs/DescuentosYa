const {
    createMembersHandler,
    updateMembersHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();

router.post("/", createMembersHandler);
router.patch("/:id", updateMembersHandler);


module.exports = router;
