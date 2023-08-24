const {
    createAdminsHandler,
    updateAdminsHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();
const {verifyToken} = require("../utils/authMiddleware");

router.post("/", createAdminsHandler);
router.patch("/:id", updateAdminsHandler);

module.exports = router;
