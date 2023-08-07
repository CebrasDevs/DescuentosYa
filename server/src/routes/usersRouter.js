const {
    createUsersHandler,
    updateUsersHandler,
    getUsersHandler,
    getVouchersHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();

router.post("/", createUsersHandler);
router.patch("/:id", updateUsersHandler);
router.get("/", getUsersHandler);
router.get("/:id/myVouchers", getVouchersHandler);

module.exports = router;
