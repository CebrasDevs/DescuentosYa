const { Router } = require("express");
const { getProfileHandler } = require("../handlers");
const router = Router();

router.get("/:id", getProfileHandler);



module.exports = router;