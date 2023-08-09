const {
    createAdminsHandler,
    updateAdminsHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();

router.post("/", createAdminsHandler);
router.patch("/:id", updateAdminsHandler);

module.exports = router;
