const {
    createVouchersHandler,
    disableVouchersHandler,
    getVouchersHandler,
} = require("../handlers");

const { Router } = require("express");
const router = Router();
const {verifyToken} = require("../utils/authMiddleware");

router.post("/", verifyToken, createVouchersHandler);
router.patch("/:id", verifyToken, disableVouchersHandler);
router.get("/", verifyToken, getVouchersHandler);

module.exports = router;
