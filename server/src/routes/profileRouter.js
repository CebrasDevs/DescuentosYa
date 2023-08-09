const { Router } = require("express");
const { getUsersByIdHandler } = require("../handlers");
const router = Router();

router.get("/:id", getUsersByIdHandler);



module.exports = router;