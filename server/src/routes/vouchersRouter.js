const {
    createVouchersHandler,
    disableVouchersHandler,
    getVouchersHandler,
} = require("../handlers");

const { Router } = require("express");
const router = Router();
const {verifyToken} = require("../utils/authMiddleware");

router.post("/", createVouchersHandler);
router.patch("/:id", disableVouchersHandler);
router.get("/", getVouchersHandler);

module.exports = router;
