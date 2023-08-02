// Cuando se agregue todo en el index del handler vamos a descomentarlo

// const {
//     createVoucherHandler,
//     updateVoucherHandler,
//     getVouchersHandler
// } = require("../handlers");

//instanaciamos router para direccionar segun metodos y rutas
const { Router } = require("express");
const router = Router();

router.post("/", createVoucherHandler);
router.patch("/:id", updateVoucherHandler);
router.get("/", getVouchersHandler);

module.exports = router;
