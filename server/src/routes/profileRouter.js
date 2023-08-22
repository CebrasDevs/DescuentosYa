const { Router } = require("express");
const { getProfileHandler } = require("../handlers");
const router = Router();

router.get("/", getProfileHandler);



module.exports = router;