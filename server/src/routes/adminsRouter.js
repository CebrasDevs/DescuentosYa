const {
    createAdminsHandler,
    updateAdminsHandler,
    getAdminsHandler,
    getAdminsByIdHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();

router.post("/", createAdminsHandler);
router.patch("/:id", updateAdminsHandler);
router.get("/:id", getAdminsByIdHandler);
router.get("/", getAdminsHandler);

module.exports = router;
