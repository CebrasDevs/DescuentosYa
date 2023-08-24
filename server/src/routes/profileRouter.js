const { Router } = require("express");
const { getProfileHandler } = require("../handlers");
const router = Router();
const {verifyToken} = require("../utils/authMiddleware");

router.get("/", getProfileHandler);
router.get("/:id", getProfileHandler);



module.exports = router;