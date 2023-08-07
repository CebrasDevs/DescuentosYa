const {
    createCompaniesHandler,
    updateCompaniesHandler,
    getCompaniesHandler,
    getCompaniesByIdHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();

router.post("/", createCompaniesHandler);
router.patch("/:id", updateCompaniesHandler);
router.get("/:id",getCompaniesByIdHandler);
router.get("/", getCompaniesHandler);

module.exports = router;
