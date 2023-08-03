const {
    createCompaniesHandler,
    updateCompaniesHandler,
    getCompaniesHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();

router.post("/", createCompaniesHandler);
router.patch("/:id", updateCompaniesHandler);
router.get("/", getCompaniesHandler);

module.exports = router;
