const {
    createUsersHandler,
    updateUsersHandler,
    getUsersHandler,
    getVouchersHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();
const {verifyToken} = require("../utils/authMiddleware");

router.post("/", createUsersHandler);
router.patch("/:id", verifyToken, updateUsersHandler);
router.get("/", verifyToken, getUsersHandler);
router.get("/:id/myVouchers", verifyToken, getVouchersHandler);

module.exports = router;
