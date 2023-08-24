const {
    createAdminsHandler,
    updateAdminsHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();
const {verifyToken} = require("../utils/authMiddleware");

router.post("/", verifyToken, createAdminsHandler);
router.patch("/:id", verifyToken, updateAdminsHandler);

module.exports = router;
