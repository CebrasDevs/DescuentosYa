const {
    createMembersHandler,
    updateMembersHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();
const {verifyToken} = require("../utils/authMiddleware");

router.post("/", createMembersHandler);
router.patch("/:id", verifyToken, updateMembersHandler);


module.exports = router;
