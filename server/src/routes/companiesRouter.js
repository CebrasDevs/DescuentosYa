const {
    createCompaniesHandler,
    updateCompaniesHandler,
    getCompaniesHandler,
    getCompaniesByIdHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();
const {verifyToken} = require("../utils/authMiddleware");

router.post("/", createCompaniesHandler);
router.patch("/:id", verifyToken, updateCompaniesHandler);
router.get("/:id",getCompaniesByIdHandler);
router.get("/", getCompaniesHandler);

module.exports = router;
