const {
    createCompanyHandler,
    updateCompanyHandler,
    getCompaniesHandler
} = require("../handlers");

//instanaciamos router para direccionar segun metodos y rutas
const { Router } = require("express");
const router = Router();

router.post("/", createCompanyHandler);
router.patch("/:id", updateCompanyHandler);
router.get("/", getCompaniesHandler);

module.exports = router;
