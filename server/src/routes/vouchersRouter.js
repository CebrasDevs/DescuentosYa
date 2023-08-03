const {
    createVouchersHandler,
    updateVouchersHandler,
    getVouchersHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();

router.post("/", createVouchersHandler);
router.patch("/:id", updateVouchersHandler);
router.get("/", getVouchersHandler);

module.exports = router;
