const { Router } = require("express");
const { getProfileHandler } = require("../handlers");
const router = Router();
const {verifyToken} = require("../utils/authMiddleware");

router.get("/", verifyToken, getProfileHandler);
router.get("/:id", verifyToken, getProfileHandler);



module.exports = router;