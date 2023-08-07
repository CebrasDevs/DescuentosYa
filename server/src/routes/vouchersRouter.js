const {
    createVouchersHandler,
    updateVouchersHandler,
    getVouchersHandler,
    getVouchersMemberHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();

router.post("/", createVouchersHandler);
router.patch("/:id", updateVouchersHandler);
router.get("/", getVouchersHandler);
router.get("/:id/myVouchers", getVouchersMemberHandler);

module.exports = router;
